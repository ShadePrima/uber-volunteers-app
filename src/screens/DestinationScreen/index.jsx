import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import styles from "./styles";
import { autoComplete } from "./styles";
import { Icon, Avatar } from "@rneui/themed";
import { colors } from "../../global/styles";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const DestinationScreen = ({ navigation }) => {
  const textInput1 = React.useRef(4);
  const textInput2 = React.useRef(5);
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

      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        placeholder="Going to ..."
        listViewDisplayed="auto"
        debounce={400}
        currentLocation={true}
        ref={textInput1}
        minLength={2}
        enablePoweredByContainer={false}
        fetchDetails={false}
        autoFocus={true}
        styles={autoComplete}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
      />
    </>
  );
};

export default DestinationScreen;
