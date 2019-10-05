import AsyncStorage from "@react-native-community/async-storage";
import {NavigationActions} from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

// add other navigation functions that you need and export them

// This needs to change at each release
const persistenceKey = "pk001";

export const persistNavigationState = async navState => {
  try {
    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
  } catch (error) {
    console.log(error);
  }
};

export const loadNavigationState = async () => {
  const jsonString = await AsyncStorage.getItem(persistenceKey);
  return JSON.parse(jsonString);
};

export function getPersistenceFunctions() {
  return __DEV__
    ? {
        persistNavigationState,
        loadNavigationState,
      }
    : {};
}

export default {
  navigate,
  setTopLevelNavigator,
};
