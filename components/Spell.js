import { useMemo } from "react"
import { Image, StyleSheet, View } from "react-native"

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomRotation() {
  return [{ rotate: `${randomIntFromInterval(-3, 3)}deg`}]
}

const Spell = ({ image, inactive, type, size = 'medium', style }) => {
  const transform = useMemo(() => randomRotation(), [])

  return(
    <View style={[styles.container, styles[size], styles[type], inactive ? styles.inactive : {}, { transform }, style]}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={image} resizeMode='cover' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#333",
    backgroundColor: 'navajowhite',
    width: 140,
    height: 200,
    overflow: 'visible',
  },
  small: {
    width: 100,
    height: 140,
    borderWidth: 6,
    borderRadius: 8
  },
  medium: {
    width: 140,
    height: 210,
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
    borderColor: 'seagreen'
  },
  strength: {
    borderColor: 'steelblue'
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  image: {
    width: '112%',
    height: '112%',
    margin: -11,
    opacity: 0.9
  }
})

export default Spell
