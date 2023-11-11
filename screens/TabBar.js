import { View, Text, TouchableOpacity } from "react-native";

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: "transparent",
        borderTopWidth: 0,
        position: "absolute",
        bottom: 0,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <options.tabBarIcon />
            <Text
              style={{
                color: isFocused ? "orange" : "#232323",
                fontFamily: "l-pixel-u",
                fontSize: 20,
                textShadowColor: "gray",
                textShadowRadius: 3,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
