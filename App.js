import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Duels from "./screens/Duels";
import SpellBook from "./screens/SpellBook";
import LeaderBoard from "./screens/LeaderBoard";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Duels" component={Duels} />
        <Tab.Screen name="Spell Book" component={SpellBook} />
        <Tab.Screen name="Leader Board" component={LeaderBoard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
