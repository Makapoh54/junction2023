import SwiftUI
import QuickPoseCore
import QuickPoseSwiftUI

struct JumpingNativeView: View {
  var quickPose = QuickPose(sdkKey: "01HEX1NKWFW0TXJEQN1BNQYENX")

  public let onJump: ((Int) -> ())

  @State private var counter = QuickPoseThresholdCounter()
  @State var overlayImage: UIImage?
  @State var feedbackText: String?

  init(onJump: @escaping (Int) -> Void) {
    self.onJump = onJump
  }

  var body: some View {
    GeometryReader { geometry in
        ZStack {
            QuickPoseCameraView(useFrontCamera: true, delegate: quickPose)
            QuickPoseOverlayView(overlayImage: $overlayImage)
        }
        .overlay(alignment: .center) {
          if let feedbackText = feedbackText {
            Text(feedbackText)
            .font(.system(size: 26, weight: .semibold)).foregroundColor(.white).multilineTextAlignment(.center)
              .padding(16)
            .background(RoundedRectangle(cornerRadius: 8).foregroundColor(Color("AccentColor").opacity(0.8)))
              .padding(.bottom, 40)
          }
        }
        .frame(width: geometry.size.width)
        .edgesIgnoringSafeArea(.all)
        .onAppear {
          quickPose.start(features: [.fitness(.jumpingJacks)], onFrame: { status, image, features, feedback, landmarks in
              switch status {
                case .success:
                  overlayImage = image
                  if let result = features.values.first  {
                    let counterState = counter.count(result.value)
                    
                    feedbackText = "\(counterState.count) Jumping Jacks"
                    
                    onJump(counterState.count)
                  } else {
                    feedbackText = nil
                  }
                    
                case .noPersonFound:
                  feedbackText = "Stand in view";
                case .sdkValidationError:
                  feedbackText = "Be back soon";
              }
          })
        }
    }
  }
}

