import React, { useRef, useState } from "react";
import { Pressable, View } from "react-native";

import { styles } from "./styles";

import { Bell, Crosshair } from "phosphor-react-native";
import { Map } from "../../components/Map";
import { AlertCard } from "../../components/AlertCard";
import MapView from "react-native-maps";
import { SliderConnection } from "../../components/SliderConnection";
import { BottomSheet } from "../../components/BottomSheet";

export function ConnectFlow() {
  const [isConnected, setIsConnected] = useState(false);
  const [hideSlider, setHideSlider] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const mapRef = useRef<MapView>(null);

  const handleCentralizeMap = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: 40.7128,
          longitude: -74.006,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        },
        1000
      );
    }
  };

  function handleConnect() {
    setIsConnected(true);
    setTimeout(() => {
      setHideSlider(true);
      setShowBottomSheet(true);
    }, 1000);
  }

  function handleDisconnect() {
    setIsConnected(false);
  }

  return (
    <View style={styles.container}>
      <Map
        ref={mapRef}
        coordinates={{ latitude: 40.7128, longitude: -74.006 }}
      />

      <View style={styles.content}>
        <Pressable
          style={[styles.mapButtonContainer, styles.centralizeButton]}
          onPress={handleCentralizeMap}
        >
          <Crosshair size={24} />
        </Pressable>

        <Pressable
          style={[styles.mapButtonContainer, styles.notifyButtonContainer]}
        >
          <Bell size={24} />
        </Pressable>

        {!isConnected && (
          <AlertCard
            featherIconName="alert-circle"
            title="Você está desconectado."
            description="Conecte-se para começar a receber nossas entregas."
            iconColor="#676767"
          />
        )}

        {hideSlider ? null : (
          <SliderConnection
            onHome
            isConnected={isConnected}
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
          />
        )}
      </View>

      {showBottomSheet && <BottomSheet />}
    </View>
  );
}
