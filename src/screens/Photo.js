import React from "react";
import { View, Text } from "react-native";

export default function Photo() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Photo</Text>
    </View>
  );
}
