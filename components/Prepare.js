import { StyleSheet, Text, View, Image } from 'react-native';
import SpellBook from './SpellBook';

const Prepare = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require('../assets/scroll-background.jpg')} />
      <View style={styles.backgroundOverlay} />
      <View style={{zIndex: 30}}>
        <SpellBook
          selectable
          onConfirm={onClose}
          header={(
            <View style={styles.header}>
              <Text style={styles.title}>Prepare for Duel!</Text>
              <Text style={styles.subtitle}>Pick 3 spells from your Spell Book to play on this match</Text>
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
    opacity: 0.3,
    zIndex: 20
  },
  header: {
    marginTop: 100,
    marginVertical: 40,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'l-pixel-u',
    fontSize: 35,
    color: '#232323',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'l-pixel-u',
    fontSize: 24,
    color: '#232323',
    textAlign: 'center',
  },
});

export default Prepare
