import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import LoggedOutNav from "./src/routes/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => {
    setLoading(false);
  };
  const preload = () => {
    const fontsPreload = [Ionicons.font];
    const fontPromises = fontsPreload.map((font) => Font.loadAsync(font));
    const imagesPreload = [require("./assets/instagramlogo.png")];
    const imagesPromises = imagesPreload.map((image) => Asset.loadAsync(image));
    return Promise.all([...fontPromises, ...imagesPromises]);
  };
  if (loading) {
    return (
      <AppLoading
        onError={console.warn}
        onFinish={onFinish}
        startAsync={preload}
      />
    );
  }
  return (
    <NavigationContainer>
      <LoggedOutNav />
    </NavigationContainer>
  );
}
