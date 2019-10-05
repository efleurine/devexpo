import React from "react";
import T from "prop-types";
import {StyleSheet} from "react-native";
import {Layout} from "react-native-ui-kitten";

export function Row({children, style}) {
  return <Layout style={[styles.container, style]}>{children}</Layout>;
}

Row.propTypes = {
  children: T.node.isRequired,
  style: T.object,
};

Row.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
