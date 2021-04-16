import React from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const TextInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.15);
  margin-bottom: 8px;
  padding: 15px 5px;
  border-radius: 4px;
  color: white;
`;

export default function CreateAccount() {
  return (
    <AuthLayout>
      <KeyboardAvoidingView
        style={{ width: "100%" }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
      >
        <TextInput
          placeholder="Frist Name"
          placeholderTextColor="gray"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
        />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="gray"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor="gray"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
          returnKeyType="done"
        />
        <AuthButton
          text="Create Account"
          disabled={true}
          onPress={() => null}
        />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
