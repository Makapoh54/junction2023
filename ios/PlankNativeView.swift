import SwiftUI
import QuickPoseCore
import QuickPoseSwiftUI

struct PlankNativeView: View {
  var quickPose = QuickPose(sdkKey: "01HEX1NKWFW0TXJEQN1BNQYENX")

  public let onTime: ((Double) -> ())

  @State private var timer = QuickPoseThresholdTimer(threshold: 0.2)
  @State var overlayImage: UIImage?
  @State var feedbackText: String?

  init(onTime: @escaping (Double) -> Void) {
    self.onTime = onTime
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
        quickPose.start(features: [.fitness(.plank)], onFrame: { status, image, features, feedback, landmarks in
            switch status {
              case .success:
                overlayImage = image
                if let result = features.values.first  {
                  let timerState = timer.time(result.value)
                  feedbackText = String(format: "%.1f", timerState.time) + "secs"
                  onTime(timerState.time)
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

