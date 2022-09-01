import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { rideData } from "../../global/data";

import MapComponent from "../../components/MapComponent";

import styles from "./styles";
import { Icon, Avatar } from "@rneui/themed";
import { colors } from "../../global/styles";
import { DestinationContext, OriginContext } from "../../contexts/contexts";

const RequestScreen = ({ navigation, route }) => {
  const { origin, dispatchOrigin } = React.useContext(OriginContext);
  const [userOrigin, setUserOrigin] = React.useState({
    latitude: origin.latitude,
    longitude: origin.longitude,
  });

  const { destination, dispatchDestination } =
    React.useContext(DestinationContext);
  const [userDestination, setUserDestination] = React.useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
  });

  const bottomsheet1 = React.useRef(1);

  // FlatList
  const snapPoints1 = React.useMemo(() => [50, 500], []);
  const handleSheetChange1 = React.useCallback((index) => {
    console.log("handleSheetShange1", index);
  }, []);

  React.useEffect(() => {
    setUserOrigin({
      latitude: origin.latitude,
      longitude: origin.longitude,
    });
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude,
    });
  }, [origin, destination]);

  const renderFlatListItems = React.useCallback(
    ({ item }) => (
      <View>
        <View style={styles.view10}>
          <View style={styles.view11}>
            <Icon
              type="material-community"
              name="clock"
              color={colors.white}
              size={18}
            />
          </View>

          <View>
            <Text style={{ fontSize: 15, color: colors.grey1 }}>
              {item.street}
            </Text>
            <Text style={{ color: colors.grey4 }}>{item.area}</Text>
          </View>
        </View>
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.grey1}
          size={32}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.view2}>
        <TouchableOpacity>
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
        </TouchableOpacity>

        <View style={styles.view4}>
          <View>
            <Image
              style={styles.image1}
              source={require("../../../assets/transit.png")}
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("DestinationScreen")}
            >
              <View style={styles.view6}>
                <Text style={styles.text1}>From where ?</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.view7}>
              <TouchableOpacity>
                <View style={styles.view5}>
                  <Text style={styles.text10}>...</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.view8}>
                <Icon
                  type="material-community"
                  name="plus-thick"
                  color={colors.black}
                  size={25}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <MapComponent userOrigin={userOrigin} userDestination={userDestination} />

      <BottomSheet
        ref={bottomsheet1}
        index={route.params.state}
        snapPoints={snapPoints1}
        onChange={handleSheetChange1}
      >
        <BottomSheetFlatList
          keyboardShouldPersistTaps="always"
          data={rideData}
          keyExtractor={(item) => item.id}
          renderItem={renderFlatListItems}
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={
            <View style={styles.view10}>
              <View style={styles.view11}>
                <Icon
                  type="material-community"
                  name="star"
                  color={colors.white}
                  size={20}
                />
              </View>
              <View>
                <Text style={styles.text9}>Saved Places</Text>
              </View>
            </View>
          }
          ListFooterComponent={
            <View>
              <View style={styles.view10}>
                <View style={styles.view11}>
                  <Icon
                    type="material-community"
                    name="map-marker"
                    color={colors.white}
                    size={20}
                  />
                </View>

                <View>
                  <Text style={styles.text9}>Set location on map </Text>
                </View>
              </View>
              <View style={styles.view10}>
                <View style={styles.view11}>
                  <Icon
                    type="material-community"
                    name="skip-next"
                    color={colors.white}
                    size={20}
                  />
                </View>

                <View>
                  <Text style={styles.text9}>Enter destination later</Text>
                </View>
              </View>
            </View>
          }
        />
      </BottomSheet>
    </View>
  );
};

export default RequestScreen;
