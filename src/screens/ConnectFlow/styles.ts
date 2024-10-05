import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 32,
    justifyContent: "flex-end",
    position: "relative",
    gap: 16,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapButtonContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    height: 49,
    width: 49,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  centralizeButton: {
    right: 0,
    bottom: "50%",
  },
  notifyButtonContainer: {
    right: 0,
    top: 0,
  },
});
