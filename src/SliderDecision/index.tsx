import React, { useState } from "react";
import { Alert, Dimensions, Pressable, Text, View } from "react-native";
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
import { FeedbackButton } from "../components/FeedbackButton";
import { StatusDelivery } from "../components/StatusDelivery";

const WINDOW_WIDTH = Dimensions.get("window").width;
const CARD_SKIP_AREA = WINDOW_WIDTH / 2;

export function SliderDecision() {
  const [isAcceptedDelivery, setIsAcceptedDelivery] = useState<null | boolean>(
    null
  );
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

  function resetState() {
    setIsAcceptedDelivery(null);
  }

  function handleAcceptDelivery() {
    setIsAcceptedDelivery(true);
  }

  function handleRefuseDelivery() {
    setIsAcceptedDelivery(false);
  }

  const dragStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: cardPosition.value }],
    };
  });

  const feedbackStyles = useAnimatedStyle(() => {
    let backgroundColor = "transparent";

    if (cardPosition.value < 0) {
      backgroundColor = "red";
    } else if (cardPosition.value > 0) {
      backgroundColor = "green";
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

  const feedbackButtonStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX:
            cardPosition.value > 0
              ? cardPosition.value - CARD_SKIP_AREA
              : cardPosition.value + CARD_SKIP_AREA,
        },
      ],
      backgroundColor: cardPosition.value > 0 ? "green" : "red",
      right: cardPosition.value > 0 ? undefined : 12,
      left: cardPosition.value > 0 ? 12 : undefined,
    };
  });

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          height: 30,
          width: 200,
          backgroundColor: "#f3a",
          marginBottom: "auto",
          marginTop: 50,
          zIndex: 50,
        }}
        onPress={resetState}
      >
        <Text>Resetar estado</Text>
      </Pressable>

      <View style={[styles.background]} />
      <View style={styles.sliderContent}>
        <Animated.View style={[styles.feedback, feedbackStyles]} />

        {isAcceptedDelivery === null ? (
          <>
            <FeedbackButton style={feedbackButtonStyles} />

            <GestureDetector gesture={onPan}>
              <Animated.View style={[dragStyles]}>
                <CollectCard />
              </Animated.View>
            </GestureDetector>

            <Tips />
          </>
        ) : (
          <StatusDelivery status={isAcceptedDelivery} />
        )}
      </View>
    </View>
  );
}
