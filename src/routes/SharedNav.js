import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../screens/Feed";
import MyProfile from "../screens/MyProfile";
import Notifications from "../screens/Notifications";
import Photo from "../screens/Photo";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

const Stack = createStackNavigator();

export default function SharedNav({ screenName }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          shadowColor: "rgba(255, 255, 255, 0.2)",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen name="Feed" component={Feed} />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name="Search" component={Search} />
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen name="Notifications" component={Notifications} />
      ) : null}
      {screenName === "MyProfile" ? (
        <Stack.Screen name="MyProfile" component={MyProfile} />
      ) : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}
