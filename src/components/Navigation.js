import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen.js";
import PlayScreen from "../screens/PlayScreen.js";
import ResultScreen from "../screens/ResultScreen.js";
import EasyGame from "../screens/Difficulty/EasyGame.js";
import MediumGame from "../screens/Difficulty/MediumGame.js";
import HardGame from "../screens/Difficulty/HardGame.js";
import MixedGame from "../screens/Difficulty/MixedGame.js";
import HighScore from "../screens/HighScore.js";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlayScreen"
        component={PlayScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EasyGame"
        component={EasyGame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MediumGame"
        component={MediumGame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HardGame"
        component={HardGame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MixedGame"
        component={MixedGame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HighScore"
        component={HighScore}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
