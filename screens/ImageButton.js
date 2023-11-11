import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";

export default ImageButton = ({ image, onPress }) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="contain"
      resizeMethod="resize"
      style={styles.container}
    >
      <Pressable onPress={onPress} style={styles.button} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: 200,
  },
  button: {
    flex: 1,
  },
});
