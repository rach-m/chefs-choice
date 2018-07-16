import React from "react";
import { Icon } from "react-native-elements";
import { StackNavigator, withNavigation } from "react-navigation";
import App from "../App";
import { CookbookPage } from "./CookbookPage";
// import { StackNavigator } from "react-navigation";

 class CookbookIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = { title: "My Cookbook" };
  render() {
    // const {navigate} = ;
    return (
      <Icon
        name="book"
        color="#fff"
        type="feather"
        onPress={() => this.props.navigation.navigate("CookbookPage", {userId: this.props.userId})}
      />
    );
  }
}

export default withNavigation(CookbookIcon);
