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
          onPress={() => navigation.navigate("PlayScreen")}
          style={allStyles.button}
        >
          <Text style={allStyles.buttonText}>Play Now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
