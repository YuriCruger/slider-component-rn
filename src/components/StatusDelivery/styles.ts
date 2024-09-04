import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 380,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    maxHeight: 50,
    minHeight: 50,
    width: "100%",
    maxWidth: 220,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
  },
  background: {
    position: "absolute",
    opacity: 0.4,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
