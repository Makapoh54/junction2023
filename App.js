import { NavigationContainer } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import { ActivityIndicator, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Duels from "./screens/Duels";
import SpellBook from "./screens/SpellBook";
import LeaderBoard from "./screens/LeaderBoard";
import { useFonts } from "expo-font";
import DuelIcon from "./assets/duel_icon.png";
import SpellBookIcon from "./assets/spellbook_icon.png";
import LeaderBoardIcon from "./assets/leaderboard_icon.png";
import TabBar from "./screens/TabBar";
// import Squats from './Squats'
// import Plank from './Plank'
// import Jumping from './Jumping'
const Tab = createBottomTabNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    Joystix: require("./assets/fonts/joystix.otf"),
    "l-pixel-u": require("./assets/fonts/l-pixel-u.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen
          name="Duels"
          component={Duels}
          options={{
            tabBarLabel: "Duels",
            tabBarIcon: ({ color, size }) => <Image source={DuelIcon} />,
          }}
        />
        <Tab.Screen
          name="Spell Book"
          component={SpellBook}
          options={{
            tabBarLabel: "Spellbook",
            tabBarIcon: ({ color, size }) => <Image source={SpellBookIcon} />,
          }}
        />
        <Tab.Screen
          name="Leader Board"
          component={LeaderBoard}
          options={{
            tabBarLabel: "Leaderboard",
            tabBarIcon: ({ color, size }) => <Image source={LeaderBoardIcon} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
