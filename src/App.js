import React from "react";
import {mapping, light as lightTheme} from "@eva-design/eva";
import {ApplicationProvider, IconRegistry} from "react-native-ui-kitten";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import {NavigationContainer} from "./RootContainer";
import NavigationService from "./navigationService";

export class App extends React.Component {
  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <NavigationContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </ApplicationProvider>
      </>
    );
  }
}
