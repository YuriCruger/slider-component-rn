import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    overflow: "hidden",
    height: 320,
    marginHorizontal: 12,
  },
  topHeader: {
    backgroundColor: "#CCCCCC",
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  topHeaderMessage: {
    color: "#FF0000",
  },
  firstGroup: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    padding: 24,
    gap: 6,
  },
  priceContainer: {
    backgroundColor: "#111111",
    borderRadius: 100,
    padding: 12,
    width: 116,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  moneySign: {
    color: "#585858",
    fontSize: 18,
  },
  price: {
    color: "#ffffff",
    fontSize: 18,
  },
  secondGroup: {
    gap: 12,
    padding: 24,
    flex: 1,
  },
  iconTextRow: {
    gap: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  textBold: {
    fontWeight: "bold",
  },
  iconsContainer: {
    alignItems: "center",
  },
  tracer: {
    width: 1,
    flex: 1,
    backgroundColor: "#000000",
  },
});
