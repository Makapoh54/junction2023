import { useMemo } from "react"
import { StyleSheet, View } from "react-native"

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomRotation() {
  return [{ rotate: `${randomIntFromInterval(-3, 3)}deg`}]
}

const Spell = ({ inactive, type, size = 'medium', style }) => {
  const transform = useMemo(() => randomRotation(), [])

  return(
    <View style={[styles.container, styles[size], styles[type], inactive ? styles.inactive : {}, { transform }, style]} />
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#333",
    backgroundColor: 'white',
    width: 140,
    height: 200,
    overflow: 'visible'
  },
  small: {
    width: 100,
    height: 140,
    borderWidth: 6,
    borderRadius: 8
  },
  medium: {
    width: 140,
    height: 200,
    borderWidth: 8,
    borderRadius: 10,
  },
  inactive: {
    borderColor: "#333",
  },
  cardio: {
    borderColor: '#940f3d'
  },
  yoga: {
    borderColor: '#6ac73c'
  },
  strength: {
    borderColor: '#5a2d2d'
  }
})

export default Spell
