import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Icon } from "@rneui/themed";
import { colors } from "../global/styles";

import { HomeStack } from "./StackNavigators";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
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
