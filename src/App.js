import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
// Before rendering any navigation stack
// import {useScreens} from 'react-native-screens';
import RootContainer from './RootContainer';
// useScreens();

// const theme = {};

const App = () => {
  return (
    <ThemeProvider>
      {/* <RootContainer /> */}
      <View style={styles.container}>
        <RootContainer />
      </View>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
