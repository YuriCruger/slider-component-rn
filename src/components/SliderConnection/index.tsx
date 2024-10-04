import React from "react";
import { styles } from "./styles";
import { Dimensions, Text, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type SliderConnectionProps = {
  isConnected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
  onHome?: boolean;
};

const WINDOW_WIDTH = Dimensions.get("window").width;
const MARGIN_PAGE = 32;
const SLIDER_PADDING = 6;
const DRAG_WIDTH = 68;
const MAX_TRANSLATION_X =
  WINDOW_WIDTH - 2 * MARGIN_PAGE - DRAG_WIDTH - 2 * SLIDER_PADDING;

export function SliderConnection({
  isConnected,
  onConnect,
  onDisconnect,
  onHome,
}: SliderConnectionProps) {
  const dragPosition = useSharedValue(0);
  // const backgroundOpacity = useSharedValue(1);

  const onPan = Gesture.Pan()
    .onUpdate((event) => {
      const rightGesture = event.translationX > 0;
      const leftGesture = event.translationX < 0;

      if (onHome && isConnected) {
        return;
      }

      if (!isConnected && rightGesture) {
        dragPosition.value = Math.min(event.translationX, MAX_TRANSLATION_X);
        // backgroundOpacity.value = Math.max(
        //   0.85,
        //   1 - event.translationX / MAX_TRANSLATION_X
        // );
      }

      if (isConnected && leftGesture) {
        dragPosition.value = Math.max(
          0,
          MAX_TRANSLATION_X + event.translationX
        );
        // backgroundOpacity.value = Math.max(
        //   0.85,
        //   1 - (event.translationX * -1) / MAX_TRANSLATION_X
        // );
      }
    })
    .onEnd((event) => {
      const EDGE_MARGIN = 20;
      const rightLimit = event.translationX >= MAX_TRANSLATION_X - EDGE_MARGIN;
      const leftLimit = event.translationX <= -MAX_TRANSLATION_X + EDGE_MARGIN;
      const rightGesture = event.translationX > 0;
      const leftGesture = event.translationX < 0;

      if (rightGesture && !rightLimit && !isConnected) {
        dragPosition.value = withTiming(0);
      }

      if (leftGesture && !leftLimit && isConnected) {
        dragPosition.value = withTiming(MAX_TRANSLATION_X);
      }

      if (rightLimit && !isConnected) {
        dragPosition.value = withTiming(MAX_TRANSLATION_X);
        runOnJS(onConnect)();
      }

      if (leftLimit && isConnected) {
        dragPosition.value = withTiming(0);
        runOnJS(onDisconnect)();
      }

      // backgroundOpacity.value = withTiming(1);
    });

  const dragStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dragPosition.value }],
    };
  });

  // const backgroundButtonStyles = useAnimatedStyle(() => {
  //   const opacity = backgroundOpacity.value;

  //   return {
  //     opacity: withTiming(opacity, { duration: 100 }),
  //   };
  // });

  const maskStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dragPosition.value }],
      left: -MAX_TRANSLATION_X,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.backgroundButton]} />

      <Animated.View style={[styles.mask, maskStyles]} />

      <GestureDetector gesture={onPan}>
        <Animated.View style={[styles.draggeble, dragStyles]}>
          {isConnected ? (
            <MaterialCommunityIcons
              name="racing-helmet"
              size={32}
              color="#11C008"
            />
          ) : (
            <MaterialCommunityIcons
              name="racing-helmet"
              size={32}
              color="#C41603"
            />
          )}
        </Animated.View>
      </GestureDetector>
      {isConnected ? (
        onHome ? (
          <Text style={[styles.message, styles.connectedMessage]}>
            Você se conectou!
          </Text>
        ) : (
          <Text style={[styles.message, styles.disconnectMessage]}>
            {"<<"} Deslize o botão para desconectar-se
          </Text>
        )
      ) : (
        <Text style={[styles.message, styles.connectMessage]}>
          Deslize o botão para conectar-se {">>"}
        </Text>
      )}
    </View>
  );
}
