import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default class Launch extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.launchApp();
  }

  launchApp() {
    console.log('we will test');
    AsyncStorage.getItem('@hasBoarded')
      .then(value => {
        if (value) {
          console.log('1');
          this.props.navigation.navigate('AppStack');
          return;
        }
        console.log('2');
        this.props.navigation.navigate('BoardingStack');
      })
      .catch(error => {
        console.log('3');
        console.log(error);
      });
  }

  render() {
    return null;
  }
}
