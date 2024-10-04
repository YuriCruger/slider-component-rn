import React, { useRef, useState } from "react";
import { styles } from "./styles";
import { Swipeable } from "react-native-gesture-handler";
import { Text, View, Animated } from "react-native";
import { ThumbsDown, ThumbsUp } from "phosphor-react-native";

export function SliderConnect() {
  const swipebleRef = useRef<Swipeable>(null);
  const [isConnected, setIsConnected] = useState(false);

  const renderLeftActions = () => <View style={styles.background} />;

  const handleSwipeableOpen = () => {
    swipebleRef.current?.close();
    setIsConnected(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.conectButton}>
        <Swipeable
          ref={swipebleRef}
          renderRightActions={() => null}
          renderLeftActions={renderLeftActions}
          overshootRight={false}
          overshootLeft={false}
          leftThreshold={68}
          onSwipeableOpen={handleSwipeableOpen}
          containerStyle={styles.swipeableContainer}
        >
          <View style={styles.draggebleContainer}>
            <Animated.View
              style={[
                styles.draggeble,
                isConnected ? styles.draggebleRight : styles.draggebleLeft,
              ]}
            >
              {isConnected ? (
                <ThumbsUp size={32} color="#000" />
              ) : (
                <ThumbsDown size={32} color="#000" />
              )}
            </Animated.View>
            {isConnected ? (
              <Text style={styles.message}>Você se conectou!</Text>
            ) : (
              <Text style={styles.message}>
                Deslize o botão para conectar-se
              </Text>
            )}
          </View>
        </Swipeable>
      </View>
    </View>
  );
}
