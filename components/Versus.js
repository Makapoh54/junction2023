import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Spell from "./Spell";

const Versus = ({ spells, opponentSpells }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require('../assets/bg.png')} />
      <View style={styles.backgroundOverlay} />
      <View style={styles.content}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require("../assets/anton.jpeg")}
            style={styles.avatar}
          />
          <Image
            source={require("../assets/hat1.png")}
            style={styles.hat}
          />
        </View>
        <View style={styles.spells}>
          {opponentSpells.map((spell, index) => (
            <Spell key={spell.id} size='small' style={index && styles.spellMargin} type={spell.type} />
          ))}
        </View>
        <Text style={styles.versus}>
          VS
        </Text>
        <View style={styles.spells}>
          {spells.map((spell, index) => (
            <Spell key={spell.id} size='small' style={index && styles.spellMargin} type={spell.type} />
          ))}
        </View>
        <View style={styles.avatarWrapper}>
          <Image
            source={require("../assets/dima.jpeg")}
            style={styles.avatar}
          />
          <Image
            source={require("../assets/hat1.png")}
            style={styles.hat}
          />
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
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 30,
    flex: 1
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red'
  },
  hat: {
    position: 'absolute',
    top: -30,
    left: 8,
    width: 80,
    height: 55
  },
  versus: {
    fontFamily: 'l-pixel-u',
    fontSize: 72,
    color: 'white',
    marginVertical: 20
  },
  spells: {
    flexDirection: 'row',
    marginVertical: 30
  },
  spellMargin: {
    marginLeft: 20
  }
})

export default Versus
