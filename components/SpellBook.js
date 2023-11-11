import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Spell from './Spell';
import { useState } from 'react';
import { without } from 'lodash';

// const Spells = Array(10).fill(0).map((_, index) => ({
//   id: index,
//   name: 'Fireball',
//   description: 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.',
//   locked: index > 2
// }))

const Spells = [
  {
    id: 1,
    name: 'Fireball',
    description: 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.',
    level: 1,
    // workout: 'jumping',
    workout: 'squats',
    type: 'cardio',
    required: 2
  },
  {
    id: 2,
    name: 'Snowball',
    description: 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.',
    level: 1,
    workout: 'squats',
    type: 'strength',
    required: 2
  },
  {
    id: 3,
    name: 'Shadow Pierce',
    description: 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.',
    level: 1,
    // workout: 'plank',
    workout: 'squats',
    type: 'yoga',
    required: 2
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
                <Text style={styles.lockedText}>Locked</Text>
              </View>
            )}
            {selected.includes(spell) && (
              <View style={styles.selected} />
            )}
            <Spell type={spell.type} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 40
  },
  lockedText: {
    fontFamily: 'l-pixel-u',
    fontSize: 45,
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
    borderColor: '#6ac73c',
    zIndex: 40
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
