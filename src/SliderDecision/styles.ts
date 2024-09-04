import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "flex-end",
  },
  background: {
    position: "absolute",
    backgroundColor: "#202024",
    opacity: 0.4,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  sliderContent: {
    maxHeight: 380,
    minHeight: 380,
    flex: 1,
  },
  feedback: {
    position: "absolute",
    opacity: 0.4,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
