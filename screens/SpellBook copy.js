import { useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SpriteSheet from "./SpriteSheet";
import FireSprite from "../assets/spritesheet.png";

export default function SpellBook() {
  const fireSpriteRef = useRef();
  useEffect(() => {
    console.log(
      fireSpriteRef.current?.play,
      fireSpriteRef.current?.interpolationRanges?.play
    );
    if (fireSpriteRef.current && fireSpriteRef.current?.play) {
      //fireSpriteRef.current.play({ type: "start", loop: true,       onFinish: () => console.log('hi') });

      fireSpriteRef.current.play({
        type: "start",
        fps: 15,
        onFinish: () => {
          fireSpriteRef.current.play({ type: "loop", fps: 15, loop: true });
        },
      });
    }
  }, [fireSpriteRef.current]);
  return (
    <View style={styles.container}>
      <Text>SpellBook</Text>
      <SpriteSheet
        ref={fireSpriteRef}
        source={FireSprite}
        columns={17}
        rows={1}
        imageStyle={{ marginTop: -1 }}
        animations={{
          start: [0, 1, 2, 3, 4],
          loop: [5, 6, 7, 8, 9, 10, 11],
          end: [12, 13, 14, 15, 16],
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
