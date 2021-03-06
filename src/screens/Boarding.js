import React from "react";
import {View, Text, SafeAreaView, Button} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default class Boarding extends React.Component {
  async completeBoarding() {
    try {
      await AsyncStorage.setItem("@hasBoarded", new Date().toLocaleDateString());
      this.props.navigation.navigate("AppStack");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
        <View style={{flex: 1}}>
          <Text>This is the boarding screen</Text>
          <Button
            title="Click here to complete the boarding"
            onPress={() => this.completeBoarding()}
          />
        </View>
      </SafeAreaView>
    );
  }
}
