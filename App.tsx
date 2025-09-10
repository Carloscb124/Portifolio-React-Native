import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./src/Screens/MainScreen";
import SkillsScreen from "./src/Screens/SkillScreen";
import ResumeScreen from "./src/Screens/ResumeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#f25f4c" },
          headerTintColor: "#fffffe",
          cardStyle: { backgroundColor: "#0f0e17" },
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS 
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} options={{ title: "Perfil" }} />
        <Stack.Screen name="Skills" component={SkillsScreen} options={{ title: "Habilidades" }} />
       <Stack.Screen name="Resume" component={ResumeScreen} options={{ title: "Currículo" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}