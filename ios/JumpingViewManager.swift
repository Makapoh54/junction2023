import Foundation

@objc(JumpingViewManager)
class JumpingViewManager: RCTViewManager {
  override func view() -> UIView! {
    return JumpingView()
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc func updateFromManager(_ node: NSNumber) {
    DispatchQueue.main.async {
      let component = self.bridge.uiManager.view(forReactTag: node) as! SquatCounterView
      component.update()
    }
  }
}
