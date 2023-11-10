import SwiftUI
import UIKit

class LateralRaisesView: UIView {

  @objc var onRaise: RCTDirectEventBlock?

  override init(frame: CGRect) {
    super.init(frame: frame)
    let qpView = LateralRaisesBasicView(onRaise: { raises in
      if self.onRaise != nil {
        self.onRaise!(["raises": raises])
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
