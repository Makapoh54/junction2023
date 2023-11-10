import Foundation

@objc(PlankViewManager)
class PlankViewManager: RCTViewManager {
  override func view() -> UIView! {
    return PlankView()
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
