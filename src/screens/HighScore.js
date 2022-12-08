import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { allStyles } from "../styles/allStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={allStyles.homeContainer}>
      <Text>Your highest score on Easy difficulty is: X</Text>
      <Text>Your highest score on Medium difficulty is: X</Text>
      <Text>Your highest score on Hard difficulty is: X</Text>
      <Text>Your highest score on Mixed difficulty is: X</Text>

      <TouchableOpacity
        style={allStyles.secondaryButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={allStyles.secondaryButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
