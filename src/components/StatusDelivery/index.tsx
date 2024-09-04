import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
  status: boolean | null;
};

export function StatusDelivery({ status }: Props) {
  const backgroundColor = status ? "red" : "green";

  return (
    <View style={[styles.container]}>
      <View style={[styles.background, { backgroundColor }]} />
      <View style={[styles.button, { backgroundColor }]}>
        <Text style={styles.buttonText}>Aceitar</Text>
      </View>
    </View>
  );
}
