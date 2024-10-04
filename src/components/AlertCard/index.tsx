import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import { WarningCircle } from "phosphor-react-native";

export function AlertCard() {
  return (
    <View style={styles.container}>
      <View style={styles.rowGroup}>
        <WarningCircle size={24} color="#676767" />

        <View style={styles.textContainer}>
          <Text style={styles.textBold}>Você está desconectado.</Text>
          <Text>Conecte-se para começar a receber nossas entregas.</Text>
        </View>
      </View>
    </View>
  );
}
