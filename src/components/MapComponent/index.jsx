import React, { Component } from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import styles from "./styles";
import { mapStyle } from "../../global/mapStyle";

export default class MapComponent extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
          initialRegion={{
            latitude: 47.756576,
            longitude: 35.139216,
            latitudeDelta: 0.035,
            longitudeDelta: 0.035,
          }}
        ></MapView>
      </View>
    );
  }
}
