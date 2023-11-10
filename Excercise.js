import React, { useRef } from "react";
import {
  requireNativeComponent,
} from "react-native";

const excerciseViewMap = {
  squats: requireNativeComponent('SquatCounterView'),
  plank: requireNativeComponent('PlankView'),
  jumping: requireNativeComponent('JumpingView'),
}

const Excercise = ({ excercise }) => {
  const Component = excerciseViewMap[excercise]
  const ref = useRef()

  return (
    <Component
      style={{ height: '100%', width: '100%', zIndex: 0}}
      onSquat={event => console.log("Squats", event.nativeEvent.squats)}
      ref={ref}
    />
  )
}

export default Excercise
