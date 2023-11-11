import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
} from "react-native";
import Spell from "./Spell";
import { throttle } from "lodash";

const excerciseViewMap = {
  squats: requireNativeComponent('SquatCounterView'),
  plank: requireNativeComponent('PlankView'),
  jumping: requireNativeComponent('JumpingView'),
}

const Excercise = ({ spells, onClose }) => {
  const countRef = useRef()
  const [count, setCount] = useState(0)
  const [current, setCurrent] = useState(0)
  const currentSpell = useMemo(() => spells[current] ?? spells[2], [current])
  const Component = excerciseViewMap[currentSpell.workout]

  const [text, setText] = useState(null)
  const throttledSetText = useCallback(throttle(setText, 1000), [])

  const onEvent = useCallback((name) => event => {
    const count = event.nativeEvent[name]

    if (count === countRef.current) return

    countRef.current = count

    if (count >= currentSpell.required) {
      onCompleted()
    } else {
      setCount(Math.min(Math.round(count), currentSpell.required))
    }
  }, [currentSpell.required, onCompleted])

  const onCompleted = useCallback(() => {
    setCount(0)
    countRef.current = 0
    setCurrent(c => c + 1)
  }, [])

  useEffect(() => {
    if (current > 2) onClose(true)
  }, [current, onClose])

  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require('../assets/bg.png')} />
      <View style={styles.backgroundOverlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Cast a spell</Text>
        <Text style={styles.description}>
          {currentSpell.workout === 'squats' ? `Do ${currentSpell.required} squats` : currentSpell.workout === 'plank' ? `Do ${currentSpell.required} seconds of plank` : `Do ${currentSpell.required} jumps`}
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
          {`${count} of ${currentSpell.required} complete`}
        </Text>
        <View style={styles.progress}>
          {spells.map((spell, index) => (
            <Spell key={spell.id} size='small' style={index && styles.spellMargin} type={spell.type} inactive={current <= index} image={spell.image} />
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
