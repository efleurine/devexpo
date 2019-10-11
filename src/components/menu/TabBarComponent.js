import React from "react";
import {StyleSheet} from "react-native";
import {BottomNavigation, BottomNavigationTab} from "react-native-ui-kitten";

export function TabBarComponent(props) {
  const {onTabPress, navigation} = props;
  const {routes, index: activeRouteIndex} = navigation.state;

  return (
    <BottomNavigation
      onLayout={({nativeEvent: { layout: {x, y, width, height}}})=>{
        console.log('the size', width, height);
      }}
      style={styles.bottomNav}
      appearance="noIndicator"
      selectedIndex={activeRouteIndex}
      onSelect={selectedIndex => {
        onTabPress({route: routes[selectedIndex]});
      }}>
      <BottomNavigationTab title="Schedule" />
      <BottomNavigationTab title="Exposition" />
      <BottomNavigationTab title="Info" />
      <BottomNavigationTab title="Connection" />
    </BottomNavigation>
  );
}

// https://dev.to/hrastnik/lets-create-a-custom-animated-tab-bar-with-react-native-3496

const styles = StyleSheet.create({
  bottomNav: {
    borderTopColor: "lightgray",
    borderTopWidth: 1,
  },
});
