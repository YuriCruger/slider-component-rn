import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    maxHeight: 80,
    minHeight: 80,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    overflow: "hidden",
    padding: 6,
  },
  backgroundButton: {
    position: "absolute",
    backgroundColor: "#202024",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  message: {
    color: "#fff",
    position: "absolute",
  },
  disconnectMessage: {
    right: 80,
  },
  connectMessage: {
    left: 80,
  },
  connectedMessage: {
    right: 80,
  },
  draggeble: {
    backgroundColor: "#ffffff",
    height: 68,
    width: 68,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  mask: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#202024",
    borderRadius: 100,
    width: "100%",
    zIndex: 10,
  },
});
