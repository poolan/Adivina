import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const [keyword, setKeyword] = useState("");
const [question, setQuestion] = useState([]);

const fetchMeals = () => {
  fetch(`http://numbersapi.com/random/year?fragment`)
    .then((response) => response.json())
    .then((data) => setQuestion(data.meals))
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
      <Text>
        Lets try to retrieve here a food information API and allocate its price
        into asneed to guess.1
      </Text>
    </View>
  );
}

export default function App() {
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
