import React from "react";
import { Root, Container } from "native-base";
import { StackNavigator } from "react-navigation";
import Index from "./Home";
import CookbookPage from "./src/CookbookPage";

const AppNavigator = StackNavigator({
  Index: {screen: Index},
  CookbookPage: {screen: CookbookPage}
});

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}
