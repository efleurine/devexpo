import React from "react";
import {Layout, Text} from "react-native-ui-kitten";

export default function ScheduleDetailScreen(props) {
  return (
    <Layout>
      <Text>Session detail</Text>
      <Text>Need to be implementated</Text>
    </Layout>
  );
}

ScheduleDetailScreen.navigationOptions = ({navigation}) => {
  const {title} = navigation.getParam("schedule");
  return {
    headerTitle: title,
  };
};
