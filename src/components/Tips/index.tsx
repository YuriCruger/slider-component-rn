import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export function Tips() {
  return (
    <View style={styles.container}>
      <Text style={styles.tipsMessage}>&lt;&lt;Arraste para recusar</Text>
      <Text style={styles.tipsMessage}>Arraste para aceitar&gt;&gt;</Text>
    </View>
  );
}
