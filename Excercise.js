import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
} from "react-native";
import Spell from "./components/Spell";
import { throttle } from "lodash";

const excerciseViewMap = {
  squats: requireNativeComponent('SquatCounterView'),
  plank: requireNativeComponent('PlankView'),
  jumping: requireNativeComponent('JumpingView'),
}

const Excercise = () => {
  const [excercise, setExcercise] = useState('squats')
  const Component = excerciseViewMap[excercise]

  const countRef = useRef()
  const [count, setCount] = useState(0)
  const [current, setCurrent] = useState(0)

  const [text, setText] = useState(null)
  const throttledSetText = useCallback(throttle(setText, 1000), [])

  const required = useMemo(() => excercise === 'squats' ? 5 : excercise === 'plank' ? 20 : 5, [excercise])

  const onEvent = useCallback((name) => event => {
    const count = event.nativeEvent[name]

    if (count === countRef.current) return

    countRef.current = count

    if (count === required) {
      onCompleted()
    } else {
      setCount(Math.min(Math.round(count), required))
    }
  }, [required])

  const onCompleted = useCallback(() => {
    setCount(0)
    countRef.current = 0
    setCurrent(c => c + 1)
    setExcercise(e => e === 'squats' ? 'jumping' : 'plank')
  }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require('./assets/bg.png')} />
      <View style={styles.backgroundOverlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Cast a spell</Text>
        <Text style={styles.description}>
          {excercise === 'squats' ? `Do ${required} squats` : excercise === 'plank' ? `Do ${required} seconds of plank` : `Do ${required} jumps`}
        </Text>
        <View style={styles.excerciseContainer}>
          <Component
            key={current.toString()}
            style={{ height: '100%', width: '100%', zIndex: 0 }}
            onSquat={onEvent('squats')}
            onJump={onEvent('count')}
            onTime={onEvent('time')}
            onText={event => throttledSetText(event.nativeEvent.text)}
          />
          {text && (
            <View style={styles.excerciseTextWrapper}>
              <Text style={styles.excerciseText}>
                {text}
              </Text>
            </View>
          )}
        </View>
        <Text style={styles.currentProgress}>
          {`${count} of ${required} complete`}
        </Text>
        <View style={styles.progress}>
          {Array(3).fill(0).map((_, index) => (
            <Spell key={index} size='small' style={index && styles.spellMargin} type={index === 0 ? 'cardio' : index === 1 ? 'yoga' : 'strength'} inactive={current <= index} />
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
    zIndex: 20
  },
  content: {
    alignItems: 'center',
    zIndex: 30
  },
  title: {
    fontFamily: 'l-pixel-u',
    fontSize: 40,
    color: 'white',
    marginBottom: 10,
    marginTop: 60
  },
  description: {
    fontFamily: 'l-pixel-u',
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    color: 'gold'
  },
  excerciseContainer: {
    width: 250,
    height: 380,
    borderWidth: 8,
    borderColor: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
  excerciseTextWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  excerciseText: {
    fontFamily: 'l-pixel-u',
    fontSize: 24,
    color: 'white',
  },
  currentProgress: {
    fontFamily: 'l-pixel-u',
    fontSize: 24,
    color: 'white',
  },
  progress: {
    flexDirection: 'row',
    marginTop: 30
  },
  spellMargin: {
    marginLeft: 20
  }
})

export default Excercise
