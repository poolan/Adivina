import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { allStyles } from "../styles/allStyles";
import Welcome from "../components/Welcome.js";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={allStyles.homeContainer}>
      <Welcome />
      {/* <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn3d.iconscout.com/3d/premium/preview/question-mark-2891357-2409768@0.png?w=0&h=700&f=jpeg",
          }}
          resizeMode="contain"
        />
      </View> */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("PlayScreen")}
          style={allStyles.homeButton}
        >
          <Text>Play!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
