import Foundation

@objc(SquatCounterViewManager)
class SquatCounterViewManager: RCTViewManager {
  override func view() -> UIView! {
    return SquatCounterView()
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
