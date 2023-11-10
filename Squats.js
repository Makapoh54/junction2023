import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  requireNativeComponent,
  UIManager,
  findNodeHandle
} from "react-native";

const COMPONENT_NAME = "SquatCounterView";
const RNQuickPoseView = requireNativeComponent(COMPONENT_NAME);

export default class Squats extends Component {
  static propTypes = {
    onUpdate: PropTypes.func
  };

  constructor(props) {
    super(props)
  }

  _onUpdate = event => {
    // call it only if a handler was passed as props
    if (this.props.onUpdate) {
      this.props.onUpdate(event.nativeEvent);
    }
  };

  render() {
    const { style } = this.props;
    return (
      <RNQuickPoseView
        style={{ height: '100%', width: '100%', zIndex: 0}}
        // onUpdate={this._onUpdate}
        onSquat={event => console.log("Squats", event.nativeEvent.squats)}
        ref={ref => (this.ref = ref)}
      />
    );
  }

  update = (...args) => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this.ref),
      UIManager[COMPONENT_NAME].Commands.updateFromManager,
      [...args]
    );
  };
}
