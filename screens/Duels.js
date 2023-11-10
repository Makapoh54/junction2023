import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Excercise from '../Excercise'
import { useIsFocused } from '@react-navigation/native';

export default function Duels() {
  const isFocused = useIsFocused()

  return isFocused ? <Excercise excercise='squats' /> : null

  return (
    <View style={styles.container}>
      <Text>Duels</Text>
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
});
