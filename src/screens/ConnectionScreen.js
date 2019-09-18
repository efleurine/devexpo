import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function ConnectionScreen(props) {
  return (
    <View style={styles.container}>
      <Text>People you connect to and scan</Text>
      <Text>may be we don't need this screen</Text>
      <Button
        title="Open dummy"
        onPress={() => {
          props.navigation.navigate('Dummy', {origin: 'Connection'});
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
