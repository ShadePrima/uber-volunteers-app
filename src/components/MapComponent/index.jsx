import React, { Component } from "react";
import { Image, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { GOOGLE_MAPS_APIKEY } from "@env";

import styles from "./styles";
import { mapStyle } from "../../global/mapStyle";
import { colors } from "../../global/styles";

export default class MapComponent extends Component {
  constructor() {
    super();
    this.state = {};
    this._map = React.createRef(35);
  }

  componentDidUpdate() {
    setInterval(() => {
      if (this.props.userDestination.latitude != null) {
        this._map.current.fitToCoordinates(
          [this.props.userOrigin, this.props.userDestination],
          {
            edgePadding: { top: 150, right: 50, left: 50, bottom: 200 },
            animated: true,
          }
        );
      }
    }, 500);
  }

  render() {
    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={this._map}
          style={styles.map}
          customMapStyle={mapStyle}
          initialRegion={{
            latitude: 47.756576,
            longitude: 35.139216,
            latitudeDelta: 0.035,
            longitudeDelta: 0.035,
          }}
        >
          {this.props.userOrigin.latitude != null && (
            <MapView.Marker
              coordinate={this.props.userOrigin}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Image
                source={require("../../../assets/location.png")}
                style={styles.markerOrigin2}
                resizeMode="cover"
              />
            </MapView.Marker>
          )}

          {this.props.userDestination.latitude != null && (
            <MapView.Marker
              coordinate={this.props.userDestination}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Image
                source={require("../../../assets/location.png")}
                style={styles.markerDestination}
                resizeMode="cover"
              />
            </MapView.Marker>
          )}

          {this.props.userDestination.latitude !== null && (
            <MapViewDirections
              origin={this.props.userOrigin}
              destination={this.props.userDestination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={2}
              strokeColor={colors.black}
            />
          )}
        </MapView>
      </View>
    );
  }
}
