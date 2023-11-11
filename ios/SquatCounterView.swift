import SwiftUI
import UIKit

class SquatCounterView: UIView {

  @objc var onSquat: RCTDirectEventBlock?
  @objc var onText: RCTDirectEventBlock?

  override init(frame: CGRect) {
    super.init(frame: frame)
    let qpView = SquatCounterNativeView(onSquat: { squats in
      if self.onSquat != nil {
        self.onSquat!(["squats": squats])
      }
    }, onText: { text in
      if self.onText != nil {
        self.onText!(["text": text!])
      }
    })

    let vc = UIHostingController(rootView: qpView)

    self.backgroundColor = UIColor.red
    let swiftuiView = vc.view!
    swiftuiView.translatesAutoresizingMaskIntoConstraints = false

    addSubview(swiftuiView)
      NSLayoutConstraint.activate([
        swiftuiView.centerXAnchor.constraint(equalTo: self.centerXAnchor),
        swiftuiView.centerYAnchor.constraint(equalTo: self.centerYAnchor),
        swiftuiView.widthAnchor.constraint(equalTo: self.widthAnchor),
        swiftuiView.heightAnchor.constraint(equalTo: self.heightAnchor),
      ])
  }

  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  @objc func update() {

  }
}
