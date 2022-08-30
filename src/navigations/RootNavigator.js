import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./DrawerNavigator";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
