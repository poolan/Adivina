import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { allStyles } from "../styles/allStyles";

const ResultScreen = ({ navigation }) => {
  return (
    <View style={allStyles.homeContainer}>
      <Text></Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={allStyles.button}
      >
        <Text style={allStyles.buttonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("PlayScreen")}
        style={allStyles.button}
      >
        <Text style={allStyles.buttonText}>Play Again!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({});
