import React, { useRef, useState } from "react";
import { Pressable, View } from "react-native";

import { styles } from "./styles";

import { Bell, Crosshair } from "phosphor-react-native";
import { Map } from "../../components/Map";
import { AlertCard } from "../../components/AlertCard";
import MapView from "react-native-maps";
import { SliderConnection } from "../../components/SliderConnection";

export function ConnectFlow() {
  const [isConnected, setIsConnected] = useState(false);
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

        {!isConnected && <AlertCard />}

        <SliderConnection
          // onHome
          isConnected={isConnected}
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
        />
      </View>
    </View>
  );
}
