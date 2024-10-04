import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SliderDecision } from "./src/screens/SliderDecision";
import { SliderConnect } from "./src/screens/SwipeableDontWork";
import { View } from "react-native";
import { ConnectFlow } from "./src/screens/ConnectFlow";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <SliderDecision /> */}
        {/* <SliderConnect /> */}
        <ConnectFlow />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
