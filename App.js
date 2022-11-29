import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import HomeScreen from "./src/screens/HomeScreen.js";
import Questions from "./src/screens/Questions.js";
import Result from "./src/screens/Result.js";

const App = () => {
  return (
    <View>
      <Text style={styles.container}>
        <HomeScreen />
        {/* <Questions /> */}
        {/* <Result /> */}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 30,
  },
});
