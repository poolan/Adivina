import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { allStyles } from "../styles/allStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={allStyles.homeContainer}>
      <View>
        <Image
          style={allStyles.welcomeBanner}
          source={require("../../assets/welcomeBanner.png")}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EasyGame")}
          style={allStyles.buttonEasy}
        >
          <Text style={allStyles.buttonText}>Easy Difficulty</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MediumGame")}
          style={allStyles.button}
        >
          <Text style={allStyles.buttonText}>Medium Difficulty</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("HardGame")}
          style={allStyles.buttonHard}
        >
          <Text style={allStyles.buttonText}>Hard Difficulty</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MixedGame")}
          style={allStyles.buttonMixed}
        >
          <Text style={allStyles.buttonText}>Mixed Difficulty</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
