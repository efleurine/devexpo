import "react-native-gesture-handler";
import React from "react";
import {ActivityIndicator} from "react-native";
import {useScreens} from "react-native-screens";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {TabBarComponent} from "./components/menu/TabBarComponent";
import {DrawerNavigation} from "./components/menu/DrawerMenu";

import {
  ConnectionScreen,
  DummyScreen,
  InfoScreen,
  ExpositionScreen,
  ScheduleScreen,
  LaunchScreen,
  BoardingScreen,
  ModalScreen,
  ScheduleDetailScreen,
} from "./screens";

useScreens();

const ScheduleStack = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen,
  },
  ScheduleDetail: {
    screen: ScheduleDetailScreen,
  },
});

const ExpositionStack = createStackNavigator({
  Exposition: {
    screen: ExpositionScreen,
  },
});

const InfoStack = createStackNavigator({
  Info: {
    screen: InfoScreen,
  },
});

const ConnectionStack = createStackNavigator({
  Connection: {
    screen: ConnectionScreen,
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    // Book,
    Schedule: {
      screen: ScheduleStack,
    },
    Exposition: {
      screen: ExpositionStack,
    },
    Info: {
      screen: InfoStack,
    },
    Connection: {
      screen: ConnectionStack,
    },
  },
  {
    tabBarComponent: TabBarComponent,
  }
);

// Drawer

const DrawerNavigator = createDrawerNavigator(
  {
    MainNavigator: {
      screen: TabNavigator,
    },
  },
  {
    // contentComponent: DrawerNavigation,
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: DrawerNavigator,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

const MainNavigator = createSwitchNavigator(
  {
    LaunchStack: {screen: LaunchScreen},
    BoardingStack: {screen: BoardingScreen},
    AppStack: RootStack,
  },
  {
    initialRouteName: "AppStack", // AuthStack
  }
);

const createAppRouter = container => createAppContainer(container);

export const NavigationContainer = createAppRouter(MainNavigator);
