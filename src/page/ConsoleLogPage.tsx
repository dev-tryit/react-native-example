import React from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

const ConsoleLogPage = () => {
  return (
    <Pressable
      onPress={() => {
        console.log('pressed');
      }}
      style={({ pressed }) => ({
        backgroundColor: pressed ? 'lightskyblue' : 'white'
      })}>
      <Text>Press Me!</Text>
    </Pressable>
  );
};

export default ConsoleLogPage;