import { StyleSheet, View, Modal as RawModal, Text, Pressable } from "react-native";

const Invite = ({ modalVisible, onAccept, onClose }) => {
  return (
    <View style={styles.centeredView}>
      <RawModal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <Text style={styles.title}>Challenge!</Text>
            <Text style={styles.subtitle}>You have been invited to duel.</Text>
            <View style={styles.row}>
              <Pressable
                style={[styles.button, { marginRight: 10 }]}
                onPress={onAccept}
              >
                <Text style={styles.buttonText}>⚔️ Accept ⚔️</Text>
              </Pressable>
              <Pressable
                style={[styles.button, { backgroundColor: 'lightgrey' }]}
                onPress={onClose}
              >
                <Text style={styles.buttonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </RawModal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  content: {
    alignItems: 'center',
    backgroundColor: 'wheat',
    paddingHorizontal: 20,
    paddingVertical: 40,
    margin: 'auto',
  },
  title: {
    fontFamily: "l-pixel-u",
    fontSize: 36,
    color: "black",
  },
  subtitle: {
    fontFamily: "l-pixel-u",
    fontSize: 24,
    color: "black",
  },
  row: {
    flexDirection: 'row'
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


export default Invite
