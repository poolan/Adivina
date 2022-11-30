import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>How are you doing today buddy?</Text>
      </View>
      <View style={styles.options}>
        <Button title="Amazing" />
        <Button title="Surviving" />
        <Button title="I've been better" />
        <Button title="I need ice cream" />
      </View>
    </View>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    height: "100%",
  },

  options: {
    marginVertical: 10,
    flex: 1,
  },
});
