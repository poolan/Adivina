import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { allStyles } from "../styles/allStyles";

const PlayScreen = ({ navigation }) => {
  return (
    <View style={allStyles.container}>
      <View>
        <Text>How are you doing today buddy?</Text>
      </View>
      <View style={allStyles.options}>
        <TouchableOpacity>
          <Text>Amazing</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Surviving</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>I've been better</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>I need ice cream</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text>Leave</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayScreen;
