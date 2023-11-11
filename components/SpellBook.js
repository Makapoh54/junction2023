import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Spell from './Spell';
import { useState } from 'react';
import { without } from 'lodash';

const Spells = [
  {
    id: 1,
    name: 'Aerobic Surge',
    description: 'Harness the power of Aerobic Surge – a spell merging precise moves and controlled breath. Fuel your endurance, elevate your heart rate, and fortify resilience through disciplined Jumping Jacks. 🌿🌀',
    level: 1,
    workout: 'jumping',
    // workout: 'squats',
    type: 'strength',
    required: 2,
    image: require('../assets/jump1.png')
  },
  {
    id: 2,
    name: 'Ember Squat',
    description: 'Master the Ember Squat, where controlled descent kindles an internal flame. This spell not only sculpts muscles but fuels your magical prowess, readying you for intense duels. 🔥💪',
    level: 1,
    workout: 'squats',
    type: 'cardio',
    required: 2,
    image: require('../assets/squat1.png')
  },
  {
    id: 3,
    name: 'Terra Stalwart',
    description: 'Embrace Terra Stalwart, a spell rooted in resilience. Planking becomes an earthbound ritual, fortifying not only your core but also grounding your magical endurance. 🌿💪',
    level: 1,
    workout: 'plank',
    // workout: 'squats',
    type: 'yoga',
    required: 2,
    image: require('../assets/plank1.png')
  },
  {
    id: 4,
    name: 'Celestial Push Power',
    description: 'Embrace the Celestial Push Power, a spell where each push-up channels cosmic strength, sculpting not just your body but also your magical might. 🌌💪',
    level: 1,
    // workout: 'plank',
    workout: 'squats',
    type: 'jumping',
    required: 2,
    image: require('../assets/jumping2.png')
  },
  {
    id: 5,
    name: 'Quantum Pull',
    description: 'Experience the Quantum Pull, a spell infusing pull-ups with quantum strength, sculpting your physique and bending the magical fabric of fitness. 🌀💪',
    level: 4,
    // workout: 'plank',
    workout: 'squats',
    type: 'yoga',
    required: 2,
    image: require('../assets/hero.png')
  },
]

const SpellBook = ({ level, header, showLocked, selectable, onConfirm }) => {
  const [selected, setSelected] = useState([])

  const toggleSelect = (spell) => setSelected(selected.includes(spell) ? without([...selected], spell) : [...selected, spell])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {header}
      {Spells.map((spell, index) => {
        const locked = spell.level > level

        return ((locked && showLocked) || !locked) && (
          <Pressable key={index} style={styles.row} onPress={() => {
            if (!selectable) return

            toggleSelect(spell)
          }}>
            {locked && (
              <View style={styles.locked}>
                <Text style={styles.lockedTitle}>Locked</Text>
                <Text style={styles.lockedText}>{`Unlock at level ${spell.level}`}</Text>
              </View>
            )}
            {selected.includes(spell) && (
              <View style={styles.selected} />
            )}
            <Spell type={spell.type} image={spell.image} />
            <View style={styles.texts}>
              <Text style={styles.name}>{spell.name}</Text>
              <Text style={styles.description}>{spell.description}</Text>
            </View>
          </Pressable>
        )}
      )}
      {selectable && (
        <Pressable style={[styles.button, selected.length < 3 && styles.buttonDisabled]} disabled={selected.length < 3} onPress={() => onConfirm(selected)}>
          <Text style={styles.buttonText}>
            Confirm!
          </Text>
        </Pressable>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    maxWidth: '100%',
    zIndex: 30,
    paddingBottom: 80,
    alignItems:'center'
  },
  row: {
    flex: 1,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  locked: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderStyle: 'dashed',
    borderWidth: 6,
    borderRadius: 8,
    borderColor: 'black',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 40
  },
  lockedTitle: {
    fontFamily: 'l-pixel-u',
    fontSize: 45,
    color: 'white',
  },
  lockedText: {
    fontFamily: 'l-pixel-u',
    fontSize: 24,
    color: 'white',
  },
  selected: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderStyle: 'dashed',
    borderWidth: 6,
    borderRadius: 8,
    borderColor: 'turquoise',
    zIndex: 40
  },
  texts: {
    marginLeft: 20,
    flexShrink: 1
  },
  name: {
    fontFamily: 'l-pixel-u',
    fontSize: 26,
    marginBottom: 5,
    color: 'white'
  },
  description: {
    fontFamily: 'l-pixel-u',
    fontSize: 18,
    color: 'white'
  },
  button: {
    marginTop: 30,
    backgroundColor: 'gold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#8c7062'
  },
  buttonDisabled: {
    backgroundColor: 'gray'
  },
  buttonText: {
    fontFamily: "l-pixel-u",
    fontSize: 36
  }
});

export default SpellBook
