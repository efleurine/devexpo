import React from "react";
import T from "prop-types";
import {StyleSheet} from "react-native";
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {Layout} from "react-native-ui-kitten";

export function RLayout({children}) {
  return (
    <Layout style={styles.screen}>
      <Layout style={styles.container}>{children}</Layout>
    </Layout>
  );
}

RLayout.propTypes = {
  children: T.node.isRequired,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    width: wp(90),
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 56, // TODO replace by the fixed height of the topbar
    // backgroundColor: "red",
  },
});
