import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Duels from "./screens/Duels";
import SpellBook from "./screens/SpellBook";
import LeaderBoard from "./screens/LeaderBoard";
import { useFonts } from 'expo-font';

// import Squats from './Squats'
// import Plank from './Plank'
// import Jumping from './Jumping'

const Tab = createBottomTabNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    'Joystix': require('./assets/fonts/joystix.otf'),
    'l-pixel-u': require('./assets/fonts/l-pixel-u.ttf'),
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Duels" component={Duels} />
        <Tab.Screen name="Spell Book" component={SpellBook} />
        <Tab.Screen name="Leader Board" component={LeaderBoard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
