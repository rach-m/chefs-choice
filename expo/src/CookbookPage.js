import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Modal,
  Alert,
  StatusBar
} from "react-native";
// import {Icon } from "react-native-elements";
import { StackNavigator } from "react-navigation";
import { List, ListItem } from "react-native-elements";

export default class CookbookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  getRecipes() {
    var url = "https://data.broadcasting79.hasura-app.io/v1/query";

    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    };

    var body = {
      type: "select",
      args: {
        table: "favorites",
        columns: ["recipe_name", "recipe_image", "recipe_link"],
        where: {
          hasura_id: {
            $eq: this.props.userId
          }
        }
      }
    };

    requestOptions.body = JSON.stringify(body);

    fetch(url, requestOptions)
      .then(function(response) {
        return response.json();
      })
      .then(function(results) {
        // console.log(results[0].recipe_name)
          return results
          this.setState({ results: results });
      })
    return <View style = {{flex: 1}}>
    <List containerStyle={{ marginBottom: 20 }}>
        {this.state.results.map((result, i) => {
          <ListItem roundAvatar avatar={{ uri: result.recipe_image }} title={result.recipe_name} subtitle={result.recipe_link} key = {i} />;
        })}
      </List>
      </View>
    }
      // .catch(function(error) {
      //   console.log("Request Failed:" + error);
      // });


  render() {
    <StatusBar />;
    return (
      <View style = {{flex: 1}}>
      {this.getRecipes()}
      </View>
    );
  }
}
