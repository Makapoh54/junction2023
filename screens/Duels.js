import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Excercise from "../components/Excercise";
import { ProgressBar, Divider } from "react-native-paper";
import Modal from "../components/Modal";
import Prepare from "../components/Prepare";
import DuelResults from "../components/DuelResults";
import Versus from "../components/Versus";
import Invite from "../components/Invite";

export default function Duels() {
  const [spells, setSpells] = useState()
  const [inviteVisible, setInviteVisible] = useState(true)
  const [prepareVisible, setPrepareVisible] = useState(false)
  const [excerciseVisible, setExcerciseVisible] = useState(false)
  const [versusVisible, setVersusVisible] = useState(false)
  const [resultsVisible, setResultsVisible] = useState(false)

  const closeInvite = () => setInviteVisible(false)
  const openPrepare = () => {
    closeInvite()
    setPrepareVisible(true)
  }
  const closePrepare = (spells) => {
    setPrepareVisible(false)
    if (spells.length) {
      setSpells(spells)
      openExcercise()
    }
  }
  const openExcercise = () => setExcerciseVisible(true)
  const openVersus = () => setVersusVisible(true)
  const openResults = () => setResultsVisible(true)
  const closeVersus = () => {
    setVersusVisible(false)
    openResults()
  }
  const closeExcercise = (done) => {
    setExcerciseVisible(false)
    if (done) openVersus()
  }
  const closeResults = () => setResultsVisible(false)

  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require('../assets/castle.jpg')} />
      <View style={styles.backgroundOverlay} />
      <View style={{ marginVertical: 60, marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', zIndex: 30 }}>
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
          {/* <Image
            source={require("../assets/castle.jpg")}
            style={{
              width: 350,
              height: 350,
              // borderRadius: 350 / 2,
              position: "absolute",
              opacity: 0.3,
              top: 10,
            }}
            // blurRadius={6}
          /> */}

          <Text
            style={[
              styles.header3,
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
            onPress={openPrepare}
          >
            <Text style={styles.buttonText}>⚔️ Duel ⚔️</Text>
          </Pressable>
        </View>
      </View>

      <Invite modalVisible={inviteVisible} onAccept={openPrepare} onClose={closeInvite} />

      <Modal modalVisible={prepareVisible} onClose={closePrepare}>
        <Prepare onClose={closePrepare} />
      </Modal>

      <Modal modalVisible={excerciseVisible} onClose={() => closeExcercise()}>
        {spells && <Excercise spells={spells} onClose={closeExcercise} />}
      </Modal>

      <Modal modalVisible={versusVisible}>
        {spells && <Versus spells={spells} opponentSpells={[...spells].reverse()} onClose={closeVersus} />}
      </Modal>

      <Modal modalVisible={resultsVisible}>
        <DuelResults onClose={closeResults} />
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
    opacity: 0.8,
    zIndex: 20,
  },
  title: {
    fontFamily: "l-pixel-u",
    fontSize: 36,
    color: "white",
  },
  subtitle: {
    fontFamily: "l-pixel-u",
    fontSize: 24,
    color: "white",
  },
  header: {
    fontFamily: "l-pixel-u",
    fontSize: 24,
    color: "white",
  },
  header2: {
    fontFamily: "l-pixel-u",
    fontSize: 20,
    color: "white",
  },
  header3: {
    fontFamily: "l-pixel-u",
    fontSize: 24,
    color: "white",
  },
  level: {
    fontFamily: "l-pixel-u",
    fontSize: 26,
    color: "white",
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
