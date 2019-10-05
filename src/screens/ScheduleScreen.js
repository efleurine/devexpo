import React from "react";
import {StyleSheet} from "react-native";
import {Layout, Text, Avatar} from "react-native-ui-kitten";
import Touchable from "react-native-platform-touchable";

import {Schedule} from "../components/schedule";

export default class LayoutShowcase extends React.Component {
  static navigationOptions = props => ({
    headerTitle: "Schedule",
    headerRight: (
      <Touchable
        style={{padding: 16}}
        onPress={() => {
          props.navigation.openDrawer();
        }}>
        <Avatar source={require("../assets/myself.jpg")} size="small" />
      </Touchable>
    ),
  });

  render() {
    return (
      <Layout style={styles.container}>
        <Schedule />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export function Title() {
  return <Text>Schedule</Text>;
}
