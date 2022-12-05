import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { allStyles } from "../styles/allStyles";

const PlayScreen = ({ navigation }) => {
  return (
    <View style={allStyles.playContainer}>
      <View>
        <Text style={allStyles.question}>How are you doing today buddy?</Text>
      </View>
      <View style={allStyles.answers}>
        <TouchableOpacity style={allStyles.button}>
          <Text style={allStyles.buttonText}>Amazing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={allStyles.button}>
          <Text style={allStyles.buttonText}>Surviving</Text>
        </TouchableOpacity>
        <TouchableOpacity style={allStyles.button}>
          <Text style={allStyles.buttonText}>I've been better</Text>
        </TouchableOpacity>
        <TouchableOpacity style={allStyles.button}>
          <Text style={allStyles.buttonText}>I need ice cream</Text>
        </TouchableOpacity>
      </View>
      <View style={allStyles.bottom}>
        <TouchableOpacity
          style={allStyles.secondaryButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={allStyles.secondaryButtonText}>Leave</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayScreen;
