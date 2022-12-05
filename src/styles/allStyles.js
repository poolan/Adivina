import { StyleSheet } from "react-native";

// #feb236 - dark yellow
// #618685 - dark blue
// #878f99 - grey
// #b7d7e8 - light blue

export const allStyles = StyleSheet.create({
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
  playContainer: {
    height: "100%",
    paddingVertical: 36,
    paddingHorizontal: 36,
    backgroundColor: "#b7d7e8",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  question: {
    fontSize: 26,
    marginVertical: 24,
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
});
