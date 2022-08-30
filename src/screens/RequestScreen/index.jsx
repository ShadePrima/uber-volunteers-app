import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import MapComponent from "../../components/MapComponent";

import styles from "./styles";
import { Icon, Avatar } from "@rneui/themed";
import { colors } from "../../global/styles";

const RequestScreen = ({ navigation }) => {
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

      <MapComponent />
    </View>
  );
};

export default RequestScreen;
