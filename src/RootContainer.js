import 'react-native-gesture-handler';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {
  ConnectionScreen,
  DummyScreen,
  InfoScreen,
  ExpositionScreen,
  ScheduleScreen,
  LaunchScreen,
  BoardingScreen,
} from './screens';

const ScheduleStack = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen,
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

const TabNavigator = createBottomTabNavigator({
  // Book,
  ScheduleStack,
  ExpositionStack,
  InfoStack,
  ConnectionStack,
});

// Drawer

const DrawerNavigator = createDrawerNavigator({
  MainNavigator: {
    screen: TabNavigator,
  },
});

const MainNavigator = createSwitchNavigator(
  {
    LaunchStack: {screen: LaunchScreen},
    BoardingStack: {screen: BoardingScreen},
    AppStack: DrawerNavigator,
  },
  {
    initialRouteName: 'AppStack', // AuthStack
  },
);

export default createAppContainer(MainNavigator);
