import React, { forwardRef } from "react";
import { styles } from "./styles";
import MapView, {
  LatLng,
  MapViewProps,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { Image } from "react-native";
import PinIcon from "../../assets/icon-gps.png";

type MapProps = MapViewProps & {
  coordinates: LatLng;
};

export const Map = forwardRef<MapView, MapProps>(
  ({ coordinates, ...props }, ref) => {
    return (
      <MapView
        ref={ref}
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        {...props}
      >
        <Marker coordinate={coordinates}>
          <Image source={PinIcon} />
        </Marker>
      </MapView>
    );
  }
);
