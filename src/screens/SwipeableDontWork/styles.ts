import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cccc",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  swipeableContainer: {
    borderRadius: 30,
    height: 68,
    justifyContent: "center",
  },
  draggebleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  draggeble: {
    backgroundColor: "#ffffff",
    height: 68,
    width: 68,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  draggebleLeft: {
    left: 0,
  },
  draggebleRight: {
    right: 0,
  },
  message: {
    color: "#fff",
    marginLeft: 96,
  },
  background: {
    backgroundColor: "#262626",
    flex: 1,
    borderRadius: 30,
    marginRight: 68,
  },
  conectButton: {
    backgroundColor: "#262626",
    width: "100%",
    height: 80,
    justifyContent: "center",
    borderRadius: 30,
    overflow: "hidden",
    padding: 12,
  },
});
