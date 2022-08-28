import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

import styles from "./styles";
import { Icon } from "@rneui/themed";
import { colors } from "../../global/styles";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
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

      <ScrollView bounces={false}>
        <View style={styles.home}>
          <Text style={styles.text1}>Travel usefully</Text>
          <View style={styles.view1}>
            <View style={styles.view8}>
              <Text style={styles.text2}>Benefit the volunteer movement</Text>
              <View style={styles.button1}>
                <Text style={styles.button1Text}>Ride with Uber</Text>
              </View>
            </View>

            <View>
              <Image
                style={styles.image1}
                source={require("../../../assets/uberCar.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="default" backgroundColor="#2058c0" translucent={true} />
    </View>
  );
};

export default HomeScreen;
