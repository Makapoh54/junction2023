//
//  QuickPose_BasicDemoApp.swift
//  QuickPose Demo
//
//  Created by QuickPose.ai on 12/12/2022.
//

import SwiftUI
import QuickPoseCore
import QuickPoseSwiftUI

struct LateralRaisesBasicView: View {

  public let onRaise: ((Int) -> ())
  private var quickPose = QuickPose(sdkKey: "01HEX1NKWFW0TXJEQN1BNQYENX") // register for your free key at https://dev.quickpose.ai
  @State private var overlayImage: UIImage?
  @State private var feedbackText: String? = nil
  
  init(onRaise: @escaping (Int) -> Void) {
    self.onRaise = onRaise
  }

  var body: some View {
      GeometryReader { geometry in
          ZStack(alignment: .top) {
              if ProcessInfo.processInfo.isiOSAppOnMac, let url = Bundle.main.url(forResource: "happy-dance", withExtension: "mov") {
                  QuickPoseSimulatedCameraView(useFrontCamera: true, delegate: quickPose, video: url)
              } else {
                  QuickPoseCameraView(useFrontCamera: true, delegate: quickPose)
              }
              QuickPoseOverlayView(overlayImage: $overlayImage)
          }
          .frame(width: geometry.size.width)
          .edgesIgnoringSafeArea(.all)
          .overlay(alignment: .center) {
              if let feedbackText = feedbackText {
                  Text(feedbackText)
                      .font(.system(size: 26, weight: .semibold)).foregroundColor(.white).multilineTextAlignment(.center)
                      .padding(16)
                      .background(RoundedRectangle(cornerRadius: 8).foregroundColor(Color("AccentColor").opacity(0.8)))
                      .padding(.bottom, 40)
              }
          }
          .onAppear {
            quickPose.start(features: [.fitness(.lateralRaises)], onFrame: { status, image, features, feedback, landmarks in
                switch status {
                    case .success:
                        overlayImage = image
                        if let result = features.values.first  {
                            feedbackText = "Lateral Raises: \(Int(result.value * 100))%"
                        } else {
                            feedbackText = nil
                        }
                    case .noPersonFound:
                        feedbackText = "Stand in view";
                    case .sdkValidationError:
                        feedbackText = "Be back soon";
                }
            })
          }.onDisappear {
              quickPose.stop()
          }
      }
  }
}

