import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { gql, useMutation } from "@apollo/client";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

export default function CreateAccount({ navigation }) {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const onCompleted = (data) => {
    const {
      createAccount: { ok },
    } = data;
    const { username, password } = getValues();
    if (ok) {
      navigation.navigate("Login", {
        username,
        password,
      });
    }
  };
  const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    {
      onCompleted,
    }
  );
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    console.log(data);
    if (!loading) {
      createAccountMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    register("firstName", {
      required: true,
    });
    register("lastName", {
      required: true,
    });
    register("username", {
      required: true,
    });
    register("email", {
      required: true,
    });
    register("password", {
      required: true,
    });
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
        onChangeText={(text) => setValue("firstName", text)}
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
      <AuthButton
        text="Create Account"
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
