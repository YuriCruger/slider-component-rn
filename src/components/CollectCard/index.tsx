import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
// import { BaseballHelmet, MapPin, Target } from "phosphor-react-native";

export function CollectCard() {
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.topHeaderMessage}>
          Você está no local da coleta.
        </Text>
      </View>

      <View style={styles.firstGroup}>
        <View style={styles.priceContainer}>
          <Text style={styles.moneySign}>R$</Text>
          <Text style={styles.price}>7,00</Text>
        </View>
        <Text>Distância da entrega 12km</Text>
      </View>

      <View style={styles.secondGroup}>
        <View style={styles.iconTextRow}>
          {/* <BaseballHelmet size={24} /> ESSES ICONES ESTÃO CAUSANDO BUG NO APP  */}
          <Text>Código da entrada #123456</Text>
        </View>

        <View style={styles.iconTextRow}>
          <View style={styles.iconsContainer}>
            {/* <MapPin size={24} /> ESSES ICONES ESTÃO CAUSANDO BUG NO APP */}
            <View style={styles.tracer} />
            {/* <Target size={24} /> ESSES ICONES ESTÃO CAUSANDO BUG NO APP */}
          </View>

          <View>
            <View style={[styles.iconTextRow, { marginBottom: 6 }]}>
              <View>
                <Text style={styles.textBold}>Santa Efigênia - SP</Text>
                <Text>Av. São Luiz do Maranhão, 2345, apto 504</Text>
              </View>
            </View>

            <View style={styles.iconTextRow}>
              <View>
                <Text style={styles.textBold}>Morumbi - SP</Text>
                <Text>Rua Amador Lucas, 345, loja A apto 504</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
