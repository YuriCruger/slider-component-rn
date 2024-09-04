import React from "react";
import { Text, View, ViewStyle } from "react-native";

import { styles } from "./styles";
import Animated from "react-native-reanimated";

type Props = {
  style?: ViewStyle;
};

export function FeedbackButton({ style }: Props) {
  return (
    <Animated.View style={[styles.container, style]}>
      <Text style={styles.feedbackButtonText}>Aceitar</Text>
    </Animated.View>
  );
}
