import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomRotation() {
  return [{ rotate: `${randomIntFromInterval(-3, 3)}deg`}]
}

export default function SpellBook() {
  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require('../assets/scroll-background.jpg')} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>SpellBook</Text>
          <Text style={styles.subtitle}>Explore spells available for your next journeys</Text>
        </View>
        {Array(10).fill(0).map((_, index) => (
          <View key={index} style={styles.row}>
            <View style={[styles.frame, { transform: randomRotation() }]}>

            </View>
            <View style={styles.texts}>
              <Text style={styles.name}>Fireball</Text>
              <Text style={styles.description}>A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
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
    height: '100%'
  },
  header: {
    marginVertical: 40
  },
  title: {
    fontFamily: 'l-pixel-u',
    fontSize: 50,
    color: '#232323'
  },
  subtitle: {
    fontFamily: 'l-pixel-u',
    fontSize: 24,
    color: '#232323'
  },
  scrollView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'stretch',
    maxWidth: '100%'
  },
  row: {
    flex: 1,
    marginVertical: 20,
    flexDirection: 'row',
  },
  frame: {
    borderWidth: 8,
    borderColor: "#333",
    borderRadius: 10,
    backgroundColor: 'white',
    width: 140,
    height: 200,
    overflow: 'visible'
  },
  texts: {
    marginLeft: 20,
    flexShrink: 1
  },
  name: {
    fontFamily: 'l-pixel-u',
    fontSize: 30,
    color: '#232323'
  },
  description: {
    fontFamily: 'l-pixel-u',
    fontSize: 18,
    color: '#232323'
  }
});
