import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Excercise from "../Excercise";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar, Divider } from "react-native-paper";
import Modal from "../components/Modal";
import { BlurView } from "@react-native-community/blur";

export default function Duels() {
  const [excerciseVisible, setExcerciseVisible] = React.useState(false);
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      <View style={{ margin: 20, zIndex: 30 }}>
        <Text style={[styles.header]}>Season 1</Text>
        <Text style={[styles.header2, { paddingBottom: 10 }]}>
          🌟 The Arcane Workout Duels! 🌟
        </Text>
        <Divider
          // theme={{ colors: { outlineVariant: "rgba(245, 202, 39, 0.5)" } }}
          bold
        />

        <View
          style={{
            alignItems: "center",
            paddingTop: 10,
            height: 350,
            marginBottom: 10,
          }}
        >
          <Image
            source={require("../assets/castle.jpg")}
            style={{
              width: 350,
              height: 350,
              borderRadius: 350 / 2,
              position: "absolute",
              elevation: 2,
              opacity: 0.9,
              top: 10,
            }}
            blurRadius={6}
          />

          <Text
            style={[
              styles.header2,
              {
                paddingTop: 100,
                textShadowColor: "white",
                textShadowRadius: 5,
                textAlign: "center",
              },
            ]}
          >
            Step into the mystical realm of fitness sorcery, where every squat
            unleashes a burst of energy and every push-up conjures strength
            beyond imagination.
          </Text>
        </View>

        <View style={{ padding: 10 }}>
          <Text style={[styles.level]}>Level 4</Text>

          <ProgressBar style={styles.progress} progress={0.5} color={"gold"} />
          <Pressable
            style={styles.button}
            onPress={() => setExcerciseVisible(true)}
          >
            <Text style={styles.buttonText}>⚔️ Duel ⚔️</Text>
          </Pressable>
        </View>
      </View>
      <Modal
        modalVisible={excerciseVisible}
        onClose={() => setExcerciseVisible(false)}
      >
        <Excercise excercise="squats" />
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAEBD7",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.3,
    zIndex: 20,
  },
  header: {
    fontFamily: "l-pixel-u",
    fontSize: 35,
    color: "#232323",
  },
  header2: {
    fontFamily: "l-pixel-u",
    fontSize: 20,
    color: "#232323",
  },
  level: {
    fontFamily: "l-pixel-u",
    fontSize: 26,
    color: "#232323",
    marginBottom: 5,
  },
  progress: {
    height: 10,
    borderRadius: 5,
  },
  button: {
    marginTop: 30,
    backgroundColor: "gold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "#8c7062",
  },
  buttonText: {
    fontFamily: "l-pixel-u",
    fontSize: 25,
  },
});
