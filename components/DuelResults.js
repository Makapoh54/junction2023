import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"
import { ProgressBar } from "react-native-paper";

const DuelResults = ({ result = 'victory', onClose }) => {
  const [p, setP] = useState(0.5)

  useEffect(() => {
    setTimeout(() => {
      setP(0.75)
    }, 1000);
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {result === 'victory' ? 'Victory!' : 'Defeat!'}
      </Text>
      <Text style={styles.subtitle}>
        {result === 'victory' ? 'You flawlessly defeated your opponent! He needs to learn new skills to beat you.' : 'You were defeated! You need to learn new skills to beat this level opponent.'}
      </Text>
      <Text style={styles.exp}>
        {`${30} experience gained`}
      </Text>
      <View style={styles.progressWrapper}>
        <ProgressBar style={styles.progress} progress={p} color={"gold"} />
      </View>
      <Pressable style={styles.button} onPress={onClose}>
        <Text style={styles.buttonText}>
          Confirm!
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'l-pixel-u',
    fontSize: 60,
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'l-pixel-u',
    fontSize: 24,
    color: 'white',
    marginVertical: 10,
  },
  exp: {
    fontFamily: 'l-pixel-u',
    fontSize: 18,
    color: 'white',
    marginVertical: 10,
  },
  progressWrapper: {
    width: '100%',
    paddingHorizontal: 20
  },
  progress: {
    height: 10,
    borderRadius: 5,
    zIndex: 10,
    width: '100%',
    alignSelf: 'stretch'
  },
  button: {
    marginTop: 50,
    backgroundColor: 'gold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#8c7062'
  },
  buttonText: {
    fontFamily: "l-pixel-u",
    fontSize: 36
  }
})

export default DuelResults
