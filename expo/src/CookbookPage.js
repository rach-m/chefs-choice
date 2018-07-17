import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  Button,
  Image,
  Modal,
  Alert,
  StatusBar,
} from "react-native";
import { WebBrowser } from "expo";
// import {Icon } from "react-native-elements";
import { StackNavigator } from "react-navigation";
import { List, ListItem } from "react-native-elements";
import CookbookIcon from "./CookbookIcon";

export default class CookbookPage extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { navigation } = this.props;
    const results = navigation.getParam("results");
    <StatusBar />;
    return (
      <ScrollView>
        <List style={{ marginBottom: 20 }}>
          {results.map((result, i) => {
           return  <ListItem
              key={i}
              roundAvatar
              avatar={{ url: result.recipe_image }}
              title={result.recipe_name}
              subtitle={result.recipe_link}
              onPress={()=> {
                   WebBrowser.openBrowserAsync(result.recipe_link);
              }}
            />;
          })}
        </List>
      </ScrollView>
    );
  }
}


