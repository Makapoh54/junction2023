import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import SpellBookComponent from '../components/SpellBook'

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomRotation() {
  return [{ rotate: `${randomIntFromInterval(-3, 3)}deg`}]
}

export default function SpellBook() {
  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require('../assets/library.png')} />
      <View style={styles.backgroundOverlay} />
      <View style={{zIndex: 30}}>
        <SpellBookComponent
          showLocked
          level={1}
          header={(
            <View style={styles.header}>
              <Text style={styles.title}>SpellBook</Text>
              <Text style={styles.subtitle}>Explore spells available for your next journeys</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    opacity: 0.7,
    zIndex: 20
  },
  header: {
    marginVertical: 40
  },
  title: {
    fontFamily: 'l-pixel-u',
    fontSize: 50,
    color: 'white'
  },
  subtitle: {
    fontFamily: 'l-pixel-u',
    fontSize: 24,
    color: 'white'
  },
});
