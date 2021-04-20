import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import LoggedOutNav from "./src/routes/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";
import { Appearance, AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "styled-components";
import theme from "./src/shared/styles/theme";
import { ApolloProvider } from "@apollo/client";
import client from "./src/core/apollo";

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
  // const light = Appearance.getColorScheme() === "light";
  // const subscription = Appearance.addChangeListener[({colorScheme})]

  return (
    <ApolloProvider client={client}>
      <AppearanceProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <LoggedOutNav />
          </NavigationContainer>
        </ThemeProvider>
      </AppearanceProvider>
    </ApolloProvider>
  );
}
