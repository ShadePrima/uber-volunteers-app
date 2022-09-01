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
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import styles from "./styles";
import { Icon } from "@rneui/themed";
import { colors } from "../../global/styles";
import { mapStyle } from "../../global/mapStyle";

import { filterData, carsAround } from "../../global/data";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const HomeScreen = ({ navigation }) => {
  // Send Push Notification
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

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

  // Send Push Notification
  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
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
                  navigation.navigate("RequestScreen", { state: 0 });
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
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity
              title="Press tot send Notification"
              onPress={async () => {
                await sendPushNotification(expoPushToken);
              }}
            >
              <View style={styles.button1}>
                <Text style={styles.button1Text}>Send Push Notifications</Text>
              </View>
            </TouchableOpacity>
          </View>

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
      </ScrollView>

      <StatusBar style="default" backgroundColor="#2058c0" translucent={true} />
    </View>
  );
};

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Original Title",
    body: "Message for the AH command!",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export default HomeScreen;
