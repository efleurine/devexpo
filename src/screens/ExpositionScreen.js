import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Screen(props) {
  return (
    <View style={styles.container}>
      <Text>Exposition Screen</Text>
      <Text>Where you will be able to see all exposant</Text>
      <Button
        title="Open dummy"
        onPress={() => {
          props.navigation.navigate('Dummy', {origin: 'Exposition'});
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
