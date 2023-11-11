import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Excercise from "../Excercise";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar } from "react-native-paper";
import Modal from "../components/Modal";

export default function Duels() {
  const [excerciseVisible, setExcerciseVisible] = React.useState(false)
  const isFocused = useIsFocused();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header]}>Season 1</Text>
      <Text style={[styles.header2]}>🌟  The Arcane Workout Wars! 🌟</Text>

      <View style={{padding: 10}}>
        <Text style={[styles.level]}>Level 4</Text>
        <ProgressBar style={styles.progress} progress={0.5} color={"gold"} />
        <Pressable style={styles.button} onPress={() => setExcerciseVisible(true)}>
          <Text style={styles.buttonText}>
            ⚔️ Duel ⚔️
          </Text>
        </Pressable>
      </View>

      <Modal modalVisible={excerciseVisible} onClose={() => setExcerciseVisible(false)}>
        <Excercise excercise='squats' />
      </Modal>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontFamily: "l-pixel-u",
    fontSize: 35,
    color: "#232323",
  },
  level: {
    fontFamily: "l-pixel-u",
    fontSize: 26,
    color: "#232323",
    marginBottom: 5
  },
  progress: {
    height: 10,
    borderRadius: 5
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
  buttonText: {
    fontFamily: "l-pixel-u",
    fontSize: 36
  }
});
