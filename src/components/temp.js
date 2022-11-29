import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens.Home";
import Quiz from "./screens.Quiz";
import Result from "./screens.Result";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [keyword, setKeyword] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState([]);

  const fetchResult = () => {
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
      .then((response) => response.json())
      .then((data) => setResult(data.results[0]))
      .then(console.log(result.question))
      .catch((error) => {
        Alert.alert("Error", error);
      });
  };

  function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
        <Button title="Play" onPress={() => navigation.navigate("Play")} />
      </View>
    );
  }

  function PlayScreen() {
    return (
      <View style={styles.container}>
        <Button title="button" onPress={fetchResult} />
        <Text>{result.question}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
