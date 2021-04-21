import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "rgba(255,255,255,0.3)",
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name="home" color={color} size={focused ? 24 : 20} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name="search" color={color} size={focused ? 24 : 20} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Camera"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "camera" : "camera-outline"}
                color={color}
                size={26}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="notifications"
                color={color}
                size={focused ? 24 : 20}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name="person" color={color} size={focused ? 24 : 20} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
