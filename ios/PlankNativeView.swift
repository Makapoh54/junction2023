import SwiftUI
import QuickPoseCore
import QuickPoseSwiftUI

struct PlankNativeView: View {
  var quickPose = QuickPose(sdkKey: "01HEX1NKWFW0TXJEQN1BNQYENX")

  public let onTime: ((Double) -> ())
  public let onText: ((String?) -> ())

  @State private var timer = QuickPoseThresholdTimer(threshold: 0.2)
  @State var overlayImage: UIImage?

  init(onTime: @escaping (Double) -> Void, onText: @escaping (String?) -> Void) {
    self.onTime = onTime
    self.onText = onText
  }

  var body: some View {
    GeometryReader { geometry in
        ZStack {
          if let url = Bundle.main.url(forResource: "plank", withExtension: "mov") {
            QuickPoseSimulatedCameraView(useFrontCamera: true, delegate: quickPose, video: url)
          } else {
            QuickPoseCameraView(useFrontCamera: true, delegate: quickPose)
          }
          QuickPoseOverlayView(overlayImage: $overlayImage)
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
                  onTime(timerState.time)
                  onText("")
                } else if let feedback = feedback.values.first, feedback.isRequired  {
                  onText(feedback.displayString)
                } else {
                  onText("")
                }
              case .noPersonFound:
                onText("Stand in view")
              case .sdkValidationError:
                onText("Be back soon")
            }
          })
        }
    }
  }
}

