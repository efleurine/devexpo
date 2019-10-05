import React from "react";
import {View, Text} from "react-native";

export default function DummyScreen(props) {
  const {route, navigation} = props;

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>This is the dummy screen</Text>
      <Text>The origin {route.params.origin} </Text>
    </View>
  );
}
