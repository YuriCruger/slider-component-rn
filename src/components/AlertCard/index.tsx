import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import { Feather, Fontisto } from "@expo/vector-icons";

type AlertCardProps = {
  title: string;
  description: string;
  featherIconName?: keyof typeof Feather.glyphMap;
  fontistoIconName?: keyof typeof Fontisto.glyphMap;
  iconColor: string;
};

export function AlertCard({
  title,
  description,
  featherIconName,
  fontistoIconName,
  iconColor,
}: AlertCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.rowGroup}>
        {featherIconName && (
          <Feather name={featherIconName} size={24} color={iconColor} />
        )}

        {fontistoIconName && (
          <Fontisto name={fontistoIconName} size={24} color={iconColor} />
        )}

        <View style={styles.textContainer}>
          <Text style={styles.textBold}>{title}</Text>
          <Text>{description}</Text>
        </View>
      </View>
    </View>
  );
}
