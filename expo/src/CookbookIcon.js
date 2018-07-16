import React from "react";
import { Icon } from "react-native-elements";
import { StackNavigator, withNavigation } from "react-navigation";
import App from "../App";
import { CookbookPage } from "./CookbookPage";
// import { StackNavigator } from "react-navigation";

class CookbookIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  getRecipes = () => {
    var url = "https://data.broadcasting79.hasura-app.io/v1/query";

    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    };

    var body = {
      type: "select",
      args: {
        table: "favorites",
        columns: ["recipe_name", "recipe_image", "recipe_link"],
        where: { hasura_id: { $eq: this.props.userId } }
      }
    };

    requestOptions.body = JSON.stringify(body);
    const self = this;
    return new Promise((resolve, reject) => {
      fetch(url, requestOptions)
        .then(response => {
          return response.json();
        })
        .then(results => self.setState({ results: results }, resolve))
        .catch(reject);
    });
  };

  static navigationOptions = { title: "My Cookbook" };
  render() {
    return (
      <Icon
        name="book"
        color="#fff"
        type="feather"
        onPress={() =>
          this.getRecipes().then(() => {
            console.log('CookbookIcon results:', this.state.results);
            this.props.navigation.navigate("CookbookPage", {
              results: this.state.results
              // userId: this.props.userId
            });
          })
        }
      />
    );
  }
}

export default withNavigation(CookbookIcon);
