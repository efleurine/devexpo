import React from "react";
import T from "prop-types";
import {View} from "react-native";
import {Text} from "react-native-ui-kitten";
import styled from "styled-components/native";

export function Title({text}) {
  return (
    <Wrapper>
      <Text status="primary" category="h5">
        {text}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled(View)`
  width: 0;
  flex-grow: 1;
  /* flex: 1; */
`;

Title.propTypes = {
  text: T.string.isRequired,
};

export function SpeakerInfo({name}) {
  return <Text>{name}</Text>;
}

SpeakerInfo.propTypes = {
  name: T.string.isRequired,
};
