import React from "react";
import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { allStyles } from "../styles/allStyles";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const PlayScreen = ({ navigation }) => {
  const [info, setInfo] = useState([]);
  const [options, setOptions] = useState([]);
  const [count, setCount] = useState(0);

  const Game = () => {
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple&encode=url3986`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.results[0]), setOptions(ShuffledAnswers(data.results[0]));
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  useEffect(() => {
    Game();
  }, []);

  const ShuffledAnswers = (answers) => {
    const options = [...answers.incorrect_answers];
    options.push(answers.correct_answer);
    shuffleArray(options);
    return options;
  };

  const choice = (pick) => {
    if (pick === info.correct_answer) {
      setCount(count + 1);
      Game();
    } else {
      setCount(0);
      navigation.navigate("ResultScreen");
      Game();
    }
  };

  console.log(count);

  return (
    <View style={allStyles.playContainer}>
      <View>
        <Text style={allStyles.question}>
          {decodeURIComponent(info.question)}
        </Text>
      </View>
      <View style={allStyles.answers}>
        <TouchableOpacity
          style={allStyles.button}
          onPress={() => choice(options[0])}
        >
          <Text style={allStyles.buttonText}>
            {decodeURIComponent(options[0])}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={allStyles.button}
          onPress={() => choice(options[1])}
        >
          <Text style={allStyles.buttonText}>
            {decodeURIComponent(options[1])}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={allStyles.button}
          onPress={() => choice(options[2])}
        >
          <Text style={allStyles.buttonText}>
            {decodeURIComponent(options[2])}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={allStyles.button}
          onPress={() => choice(options[3])}
        >
          <Text style={allStyles.buttonText}>
            {decodeURIComponent(options[3])}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={allStyles.bottom}>
        <TouchableOpacity
          style={allStyles.secondaryButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={allStyles.secondaryButtonText}>Leave</Text>
        </TouchableOpacity>
        <Text>High Score: {count}</Text>
      </View>
    </View>
  );
};

export default PlayScreen;
