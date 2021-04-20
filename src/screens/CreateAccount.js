import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
  const { register, handleSubmit, setValue } = useForm();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register("fristName");
    register("lastName");
    register("username");
    register("email");
    register("password");
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        placeholder="Frist Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus
        onChangeText={(text) => setValue("fristName", text)}
        onSubmitEditing={() => onNext(lastNameRef)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setValue("lastName", text)}
        onSubmitEditing={() => onNext(usernameRef)}
      />
      <TextInput
        ref={usernameRef}
        placeholder="Username"
        placeholderTextColor="gray"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setValue("username", text)}
        onSubmitEditing={() => onNext(emailRef)}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setValue("email", text)}
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
        onChangeText={(text) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton text="Create Account" disabled={true} onPress={onValid} />
    </AuthLayout>
  );
}
