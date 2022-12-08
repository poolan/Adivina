import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

// #feb236 - dark yellow
// #618685 - dark blue
// #878f99 - grey
// #b7d7e8 - light blue

export const allStyles = StyleSheet.create({
  welcomeBanner: {
    height: 300,
    width: "100%",
    borderRadius: 70,
    borderColor: "black",
    borderWidth: 4,
    borderTopWidth: 20,
    borderBottomWidth: 20,
    marginVertical: 25,
  },
  homeContainer: {
    height: "100%",
    paddingVertical: 60,
    paddingHorizontal: 32,
    backgroundColor: "#b7d7e8",
  },
  button: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#feb236",
    alignItems: "center",
    padding: 14,
    marginVertical: 12,
    paddingVertical: 12,
  },
  buttonEasy: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#82b74b",
    alignItems: "center",
    padding: 14,
    marginVertical: 12,
    paddingVertical: 12,
  },
  buttonHard: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#a96e5b",
    alignItems: "center",
    padding: 14,
    marginVertical: 12,
    paddingVertical: 12,
  },
  buttonMixed: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#b8a9c9",
    alignItems: "center",
    padding: 14,
    marginVertical: 12,
    paddingVertical: 12,
  },

  playContainer: {
    height: "100%",
    paddingVertical: 36,
    paddingHorizontal: 36,
    backgroundColor: "#b7d7e8",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  question: {
    fontSize: 24,
    marginVertical: 12,
    fontStyle: "bold",
  },
  secondaryButton: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#878f99",
    padding: 15,
    marginBottom: 12,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    marginHorizontal: 32,
  },
  answers: {
    flex: 1,
    marginVertical: 20,
  },
  highScoreText: {
    alignItem: "center",
    fontStyle: "bold",
  },
});
