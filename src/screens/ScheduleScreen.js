import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Screen() {
  return (
    <View style={styles.container}>
      <Text>Schedule Screen</Text>
      <Text>You will be able to see of the schedule</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
