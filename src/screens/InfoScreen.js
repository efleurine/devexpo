import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function Screen(props) {
  return (
    <View style={styles.container}>
      <Text>Info Screen</Text>
      <Text>Where you will have more information about partner</Text>
      <Text>We can also add a partner info under each other item</Text>
      <Button title="Open modal screen" onPress={() => props.navigation.navigate('TheModal')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
