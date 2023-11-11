import SwiftUI
import QuickPoseCore
import QuickPoseSwiftUI

struct SquatCounterNativeView: View {
  var quickPose = QuickPose(sdkKey: "01HEX1NKWFW0TXJEQN1BNQYENX")
  
  public let onSquat: ((Int) -> ())
  public let onText: ((String?) -> ())
  
  @State var counter = QuickPoseThresholdCounter()
  @State var overlayImage: UIImage?
  
  init(onSquat: @escaping (Int) -> Void, onText: @escaping (String?) -> Void) {
    self.onSquat = onSquat
    self.onText = onText
  }
  
  var body: some View {
    GeometryReader { geometry in
      ZStack {
        if let url = Bundle.main.url(forResource: "squats-pete", withExtension: "mov") {
          QuickPoseSimulatedCameraView(useFrontCamera: true, delegate: quickPose, video: url)
        } else {
          QuickPoseCameraView(useFrontCamera: true, delegate: quickPose)
        }
        QuickPoseOverlayView(overlayImage: $overlayImage)
      }
      .frame(width: geometry.size.width)
      .edgesIgnoringSafeArea(.all)
      .onAppear {
        quickPose.start(features: [.fitness(.squats)], onFrame: { status, image, features, feedback, landmarks in
          switch status {
            case .success:
              overlayImage = image
              if let result = features.values.first  {
                let counterState = counter.count(result.value)
                onSquat(counterState.count)
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

