import React from "react";
import {View, StyleSheet, Image, Dimensions} from "react-native";
import {Text, Icon, Layout} from "react-native-ui-kitten";
import styled from "styled-components/native";
import Touchable from "react-native-platform-touchable";
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {Title} from "./atom";
import {Tag} from "./Tag";
import {Row} from "../atom";

export function ScheduleItem({data, onPress}) {
  // const {width, height} = useWindowDimensions();
  const {title, where, rcd, who, time, tags} = data;

  const [start, end] = time.split("-");
  return (
    <ItemWrapper>
      <LeftSide>
        <TimeStart category="h6">{start}</TimeStart>
        <Text category="c1">{end}</Text>
      </LeftSide>
      <RightSide>
        <InfoTop onPress={() => onPress(data)}>
          <Title text={title} />
        </InfoTop>
        <Row>
          <SessionInfoText>{where}</SessionInfoText>
          <SessionInfoText>12 mn</SessionInfoText>
        </Row>
        <Row
          style={{
            marginTop: 8,
          }}>
          {tags && tags.map(el => <Tag key={`${title}-${el}`} text={el} />)}
        </Row>
      </RightSide>
    </ItemWrapper>
  );
}

const TimeStart = styled(Text)`
  margin-bottom: 4;
`;

const ItemWrapper = styled(Layout)`
  flex-direction: row;
  /* align-items: baseline; */
  width: 288;
  align-items: flex-start;
  margin-bottom: 24;
`;

const LeftSide = styled(View)`
  flex-direction: column;
  align-items: flex-end;
  padding-right: 16;
  padding-top: 3;
`;

const RightSide = styled(View)`
  width: auto;
  flex-grow: 1;
`;

const InfoTop = styled(Touchable)`
  flex-direction: row;
  justify-content: space-between;
`;

const SessionInfoText = styled(Text)`
  font-size: 12;
  margin-right: 32;
`;
