import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  height: 100px;
`;

export default function AuthLayout({ children }) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={dismissKeyboard}
      disabled={Platform.OS === "web"}
    >
      <Container>
        <KeyboardAvoidingView
          style={{ width: "100%" }}
          behavior="position"
          keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
        >
          <Logo
            source={require("../../../assets/instagramlogowhite.png")}
            resizeMode="contain"
          />
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
