import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Welcome from "../components/Welcome.js";
import Navigation from "../components/Navigation.js";
import PlayScreen from "./PlayScreen.js";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
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
      <Button title="Play!" onPress={() => navigation.navigate("PlayScreen")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    height: 280,
    width: 350,
  },
});
