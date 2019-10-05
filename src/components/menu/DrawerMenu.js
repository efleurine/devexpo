import React from "react";
import {View} from "react-native";
import {Drawer, Text} from "react-native-ui-kitten";

const data = [{title: "Feed"}, {title: "Messages"}, {title: "Settings"}];

const DrawerHeader = style => (
  <View style={style}>
    <Text category="h6">Awesome Application</Text>
  </View>
);

export function DrawerNavigation() {
  return <Drawer data={data} header={DrawerHeader} />;
}

// import React from 'react';
// import { createDrawerNavigator, SafeAreaView } from 'react-navigation';
// import { Feed, Messages, Settings } from './path-to/screen-components'; // <-- Import screen components

// class DrawerNavigation extends React.Component {

//   constructor(props) {
//     super(props);
//     this.drawerData = props.items.map(this.createDrawerItem);
//   }

//   onRouteSelect = (index) => {
//     const { [index]: route } = this.drawerData;
//     this.props.navigation.navigate(route.title);
//   };

//   createDrawerItem = ({ routeName }) => ({
//     title: routeName,
//   });

//   render() {
//     return (
//       <SafeAreaView>
//         <Drawer data={this.drawerData} onSelect={this.onRouteSelect}/>
//       </SafeAreaView>
//     );
//   }
// }

// export const DrawerNavigator = createDrawerNavigator({
//   Feed: Feed,
//   Messages: Messages,
//   Settings: Settings,
// }, {
//   contentComponent: DrawerNavigation,
// });
