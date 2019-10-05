import React from "react";
// import styled from "styled-components/native";
import {Text} from "react-native-ui-kitten";

export function Tag({text}) {
  return (
    <Text
      category="c1"
      style={{
        marginRight: 8,
      }}>
      {text}
    </Text>
  );
}
