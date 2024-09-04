import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SliderDecision } from "./src/SliderDecision";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SliderDecision />
    </GestureHandlerRootView>
  );
}
