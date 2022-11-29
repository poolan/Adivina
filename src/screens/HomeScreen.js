import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Home!</Text>
      <Button title="Play" onPress={() => navigation.navigate("Play")} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
