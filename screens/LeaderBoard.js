import { StatusBar } from 'expo-status-bar';
import { sortBy } from 'lodash';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const nicknames = [
  'Vaganych',
  'Stepanenko',
  'Zadornov',
  'Rybnikov',
  'Bolek',
  'New Babusckas',
  'Zatlers',
  'Jury Galcev',
  'Pupa',
  'Lupa',
  'Lelek',
  'Aleksey Magma'
]

const players = Array(10).fill(null).map((_, index) => {
  const level = Math.round(Math.random() * (10 - index)) || 1

  return {
    name: nicknames[index],
    level,
    score: level * Math.round(Math.random() * 10000)
  }
})

export default function LeaderBoard() {
  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require('../assets/hero.png')} />
      <View style={styles.backgroundOverlay} />
      <View style={{ alignItems: 'center', zIndex: 30 }}>
        <Text style={styles.title}>Leaderboard</Text>
        <Text style={styles.subtitle}>Seasons mightiest & strongest wizards</Text>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={[styles.row, { marginBottom: 10 }]}>
            <View style={styles.name}>
              <Text style={styles.text}>
                Name
              </Text>
            </View>
            <View style={styles.level}>
              <Text style={styles.text}>
                Level
              </Text>
            </View>
            <View style={styles.score}>
              <Text style={styles.text}>
                Score
              </Text>
            </View>
          </View>
          {sortBy(players, player => player.level * player.score).reverse().map((player, index) => (
            <View key={player.name} style={styles.row}>
              <View style={styles.name}>
                <Text style={styles.text}>
                  {`${player.name}${index === 0 ? ' 🥇' : index === 1 ? ' 🥈' : index === 2 ? ' 🥉' : ''}`}
                </Text>
              </View>
              <View style={styles.level}>
                <Text style={styles.text}>
                  {player.level}
                </Text>
              </View>
              <View style={styles.score}>
                <Text style={styles.text}>
                  {player.score}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
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
    opacity: 0.8,
    zIndex: 20
  },
  title: {
    fontFamily: 'l-pixel-u',
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
    marginVertical: 40
  },
  subtitle: {
    fontFamily: 'l-pixel-u',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30
  },
  scrollView: {
    paddingBottom: 80,
    paddingLeft: 20
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5
  },
  name: {
    width: '50%'
  },
  level: {
    width: '20%'
  },
  score: {
    width: '30%'
  },
  text: {
    fontFamily: 'l-pixel-u',
    fontSize: 26,
    color: 'white'
  }
});
