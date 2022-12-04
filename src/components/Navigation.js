import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen.js";
import PlayScreen from "../screens/PlayScreen.js";
import ResultScreen from "../screens/ResultScreen.js";
import { NavigationContainer } from "@react-navigation/native";

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
    </Stack.Navigator>
  );
}

export default Navigation;
