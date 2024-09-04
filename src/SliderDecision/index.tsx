import React from "react";
import { Alert, Dimensions, Text, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { styles } from "./styles";

import { CollectCard } from "../components/CollectCard";
import { Tips } from "../components/Tips";

const WINDOW_WIDTH = Dimensions.get("window").width;
const CARD_SKIP_AREA = WINDOW_WIDTH / 2;

export function SliderDecision() {
  const cardPosition = useSharedValue(0);

  const onPan = Gesture.Pan()
    .onUpdate((event) => {
      cardPosition.value = event.translationX;
    })
    .onEnd((event) => {
      if (event.translationX < -CARD_SKIP_AREA) {
        runOnJS(handleAcceptDelivery)();
      }
      if (event.translationX > CARD_SKIP_AREA) {
        runOnJS(handleRefuseDelivery)();
      }
      cardPosition.value = withTiming(0);
    });

  function handleAcceptDelivery() {
    Alert.alert("Aceitar", "Deseja aceitar?", [
      { text: "Sim", onPress: () => {} },
      { text: "Não", onPress: () => {} },
    ]);
  }

  function handleRefuseDelivery() {
    Alert.alert("Recusar", "Deseja recusar?", [
      { text: "Sim", onPress: () => {} },
      { text: "Não", onPress: () => {} },
    ]);
  }

  const dragStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: cardPosition.value }],
    };
  });

  const feedbackStyles = useAnimatedStyle(() => {
    let backgroundColor = "transparent";

    if (cardPosition.value < 0) {
      backgroundColor = "green";
    } else if (cardPosition.value > 0) {
      backgroundColor = "red";
    }

    const opacity = Math.min(
      Math.abs(cardPosition.value) / CARD_SKIP_AREA,
      0.2
    );

    return {
      backgroundColor,
      opacity,
    };
  });

  const feedbackButton = useAnimatedStyle(() => {
    return {
      position: "absolute",
      top: "50%",
      right: 0,
      left: 0,
      bottom: 0,
      maxHeight: 50,
      minHeight: 50,
      width: "100%",
      maxWidth: 140,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "green",
    };
  });

  return (
    <View style={styles.container}>
      <View style={[styles.background]} />
      <View style={styles.sliderContent}>
        <Animated.View style={[styles.feedback, feedbackStyles]} />
        <Animated.View style={[feedbackButton]}>
          <Text style={styles.feedbackButtonText}>Aceitar</Text>
        </Animated.View>

        {/* <GestureDetector gesture={onPan}>
          <Animated.View style={[dragStyles]}>
            <CollectCard />
          </Animated.View>
        </GestureDetector> */}
        <Tips />
      </View>
    </View>
  );
}
