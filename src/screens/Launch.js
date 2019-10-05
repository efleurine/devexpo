import React from "react";
import AsyncStorage from "@react-native-community/async-storage";

export default class Launch extends React.Component {
  componentDidMount() {
    this.launchApp();
  }

  launchApp() {
    AsyncStorage.getItem("@hasBoarded")
      .then(value => {
        if (value) {
          this.props.navigation.navigate("AppStack");
          return;
        }

        this.props.navigation.navigate("BoardingStack");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return null;
  }
}
