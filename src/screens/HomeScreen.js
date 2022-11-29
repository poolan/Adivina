import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Welcome from "../components/Welcome.js";

const HomeScreen = () => {
  return (
    <View>
      {/* <Welcome /> */}
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn3d.iconscout.com/3d/premium/preview/question-mark-2891357-2409768@0.png?w=0&h=700&f=jpeg",
          }}
        />
      </View>
      {/* <Button title="Start" /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "50%",
  },
});
