import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import styles from "./styles";
import { autoComplete } from "./styles";
import { Icon, Avatar } from "@rneui/themed";
import { colors } from "../../global/styles";

import { DestinationContext, OriginContext } from "../../contexts/contexts";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const DestinationScreen = ({ navigation }) => {
  const { dispatchOrigin } = React.useContext(OriginContext);
  const { dispatchDestination } = React.useContext(DestinationContext);

  const textInput1 = React.useRef(4);
  const textInput2 = React.useRef(5);

  const [destination, setDestination] = React.useState(false);

  return (
    <>
      <View style={styles.view2}>
        <View style={styles.view1}>
          <Icon
            type="material-community"
            name="arrow-left"
            color={colors.grey1}
            size={32}
            onPress={() => navigation.goBack()}
          />
        </View>
        <TouchableOpacity>
          <View style={{ top: 35, alignItems: "center" }}>
            <View style={styles.view3}>
              <Avatar
                rounded
                avatarStyle={() => {}}
                size={30}
                source={require("../../../assets/blankProfilePic.jpg")}
              />
              <Text style={{ marginLeft: 5 }}>For Someone</Text>
              <Icon
                type="material-community"
                name="chevron-down"
                color={colors.grey1}
                size={26}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {destination === false && (
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="From ..."
          listViewDisplayed="auto"
          debounce={400}
          // currentLocation={true}
          ref={textInput1}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            dispatchOrigin({
              type: "ADD_ORIGIN",
              payload: {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                address: details.formatted_address,
                name: details.name,
              },
            });
            setDestination(true);
          }}
        />
      )}
      {destination === true && (
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="Going to ..."
          listViewDisplayed="auto"
          debounce={400}
          // currentLocation={true}
          ref={textInput2}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            dispatchDestination({
              type: "ADD_DESTINATION",
              payload: {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                address: details.formatted_address,
                name: details.name,
              },
            });
            navigation.navigate("RequestScreen", { state: 0 });
          }}
        />
      )}
    </>
  );
};

export default DestinationScreen;
