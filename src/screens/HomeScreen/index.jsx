import { StatusBar } from "expo-status-bar";

import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

import styles from "./styles";
import { Icon } from "@rneui/themed";
import { colors } from "../../global/styles";
import { mapStyle } from "../../global/mapStyle";

import { filterData, carsAround } from "../../global/data";

const HomeScreen = ({ navigation }) => {
  const [latlng, setLatLng] = React.useState({});
  console.log(latlng, "homeScren first");

  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === "granted") {
      const permission = await askPermission();
      return permission;
    }
    return true;
  };

  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission.status === "granted";
  };

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLatLng({ latitude: latitude, longitude: longitude });
    } catch (err) {}
  };

  const _map = React.useRef(1);

  React.useEffect(() => {
    checkPermission();
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <View style={styles.header}>
          <View style={styles.icon1}>
            <Icon
              type="material-community"
              name="menu"
              color={colors.white}
              size={40}
            />
          </View>
        </View>

        <View style={styles.home}>
          <Text style={styles.text1}>Travel usefully</Text>
          <View style={styles.view1}>
            <View style={styles.view8}>
              <Text style={styles.text2}>Benefit the volunteer movement</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RequestScreen");
                }}
              >
                <View style={styles.button1}>
                  <Text style={styles.button1Text}>Ride with Uber</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <Image
                style={styles.image1}
                source={require("../../../assets/uberCar.png")}
              />
            </View>
          </View>
        </View>

        {/* Menu */}
        <View>
          <FlatList
            numRow={4}
            horizontal={true}
            showHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.view2}>
                  <Image style={styles.image2} source={item.image} />
                </View>
                <View>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              </View>
            )}
          />
        </View>

        {/* Where to */}

        <View style={styles.view3}>
          <Text style={styles.text3}>Where to ?</Text>
          <View style={styles.view4}>
            <Icon
              type="material-community"
              name="clock-time-four"
              color={colors.grey1}
              size={26}
            />
            <Text style={{ marginLeft: 5 }}>Now</Text>
            <Icon
              type="material-community"
              name="chevron-down"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>
        <View style={styles.view5}>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.black}
                size={22}
              />
            </View>

            {/* Places */}
            <View>
              <Text style={{ fontSize: 18, color: colors.black }}>
                Razumovka
              </Text>
              <Text style={{ color: colors.grey3 }}>
                This is Vladimir's home
              </Text>
            </View>
          </View>

          <View>
            <Icon
              type="material-community"
              name="chevron-right"
              color={colors.grey}
              size={26}
            />
          </View>
        </View>
        <View style={{ ...styles.view5, borderBottomWidth: 0 }}>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.black}
                size={22}
              />
            </View>
            <View>
              <Text style={{ fontSize: 18, color: colors.black }}>Baburka</Text>
              <Text style={{ color: colors.grey3 }}>This is my home</Text>
            </View>
          </View>

          <View>
            <Icon
              type="material-community"
              name="chevron-right"
              color={colors.grey}
              size={26}
            />
          </View>
        </View>

        {/* Map */}
        <Text style={styles.text4}>Around You</Text>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MapView
            ref={_map}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
            initialRegion={{
              ...carsAround[1],
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
          >
            {carsAround.map((item, index) => (
              <MapView.Marker coordinate={item} key={index.toString()}>
                <Image
                  source={require("../../../assets/carMarker.png")}
                  style={styles.carsAround}
                  resizeMode="cover"
                />
              </MapView.Marker>
            ))}
          </MapView>
        </View>

        <View>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            initialRegion={{
              latitude: 48.28423,
              longitude: 24.548835,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
          ></MapView>
        </View>
      </ScrollView>

      <StatusBar style="default" backgroundColor="#2058c0" translucent={true} />
    </View>
  );
};

export default HomeScreen;
