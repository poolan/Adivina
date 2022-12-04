import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Welcome = () => {
  return (
    <View>
      <Text style={styles.welcome}>Welcome to Adivina!</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
    fontWeight: "550",
    justifyContent: "center",
  },
  container: {
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
  },
});
