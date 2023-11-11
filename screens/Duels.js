import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Excercise from "../Excercise";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageButton from "./ImageButton";
import { ProgressBar, MD3Colors } from "react-native-paper";

export default function Duels() {
  const isFocused = useIsFocused();

  //return isFocused ? <Excercise excercise='squats' /> : null

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header]}>Season 1</Text>
      <Text style={[styles.header2]}>🌟  The Arcane Workout Wars! 🌟</Text>

      <View style={{padding: 10}}>
        <Text style={[styles.header2]}>Level 4</Text>
        <ProgressBar progress={0.5} color={"gold"} />
        <ImageButton />
      </View>

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
    fontSize: 25,
    color: "#232323",
  },
  header2: {
    fontFamily: "l-pixel-u",
    fontSize: 20,
    color: "#232323",
  },
});
