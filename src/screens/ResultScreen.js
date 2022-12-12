import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { allStyles } from "../styles/allStyles";

const ResultScreen = ({ navigation }) => {
  return (
    <View style={allStyles.homeContainer}>
      <View>
        <Image
          style={allStyles.welcomeBanner}
          source={require("../../assets/gameover.png")}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={allStyles.button}
      >
        <Text style={allStyles.buttonText}>Home</Text>
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
