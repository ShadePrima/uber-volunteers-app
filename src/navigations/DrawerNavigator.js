import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Icon } from "@rneui/themed";
import { colors } from "../global/styles";

import { HomeStack } from "./StackNavigators";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "HomeScreen",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
          headerShown: false,
        }}
      /> */}
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Client",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
