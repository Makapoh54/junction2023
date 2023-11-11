import SwiftUI
import QuickPoseCore
import QuickPoseSwiftUI

struct JumpingNativeView: View {
  var quickPose = QuickPose(sdkKey: "01HEX1NKWFW0TXJEQN1BNQYENX")

  public let onJump: ((Int) -> ())
  public let onText: ((String?) -> ())

  @State private var counter = QuickPoseThresholdCounter()
  @State var overlayImage: UIImage?

  init(onJump: @escaping (Int) -> Void, onText: @escaping (String?) -> Void) {
    self.onJump = onJump
    self.onText = onText
  }

  var body: some View {
    GeometryReader { geometry in
        ZStack {
          QuickPoseCameraView(useFrontCamera: true, delegate: quickPose)
          QuickPoseOverlayView(overlayImage: $overlayImage)
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
                    onJump(counterState.count)
                    onText("")
                  } else if let feedback = feedback.values.first, feedback.isRequired  {
                    onText(feedback.displayString)
                  } else {
                    onText("")
                  }
                    
                case .noPersonFound:
                  onText("Stand in view")
                case .sdkValidationError:
                  onText("Be back soon");
              }
          })
        }
    }
  }
}

