import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  Alert,
  StatusBar
} from "react-native";
import { FormLabel, FormInput, Header, Icon, Button } from "react-native-elements";
import SwipeCards from "./SwipeCards.js";
import Dialog from "react-native-dialog";
import CookbookIcon from "./CookbookIcon.js";
import CookbookPage from "./CookbookPage";
import AppNavigator from "react-navigation";
import { StackNavigator } from "../App";

export default class AppScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      text: "",
      recipes: [],
      input: null
    };
  }

  handleInput = text => {
    this.setState({ input: text });
  };
  setApi(input) {
    let fromRandomNumber = Math.floor(Math.random() * 50);
    let toRandomNumber = fromRandomNumber + 30;
    input = this.state.input;
    if (input !== null) {
      fetch(
        `https://api.edamam.com/search?q=${input}&from=${fromRandomNumber}&to=${toRandomNumber}&app_id=03b9b48e&app_key=b5f03ee3a86824849490d1ffc2d0fa6e`
      )
        .then(response => {
          return response.json();
        })
        .then(recipes => {
          this.setState({ recipes: recipes.hits });
          return recipes;
        });
    }
  }

  searchAgain = () => {

     return <Dialog.Container visible={this.state.visible}>
       <Dialog.Title>Recipe Search</Dialog.Title>
       <Dialog.Description>
         Please enter a main ingredient you would like to include.
       </Dialog.Description>
       <Dialog.Input placeholder="Beef" onChangeText={this.handleInput} />
       <Dialog.Button label="Submit" onPress={() => {
           return this.setState({
             visible: false,
             input: this.state.input,
             api: this.setApi(this.state.input)
           });
         }} />
     </Dialog.Container>;
  }
  render() {
    let view;
    let loading;
    if (this.state.recipes.length > 0) {
      view = (
        <View>
          <SwipeCards
            recipes={this.state.recipes}
            userId={this.props.sessionInfo.id}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            title="Logout"
            onPress={this.props.logoutCallback}
          />
        </View>
      );
    }
    <StatusBar style={styles.StatusBar} />;
    return (
      <View style={styles.container}>
        <Header
          style={styles.Header}
          outerContainerStyles={styles.headerOuterContainer}
          leftComponent={
            <Icon
              name="search"
              color="#fff"
              type="feather"
              onPress={() => {
              <Dialog.Container visible={true}>
                <Dialog.Title>
                  Sorry this feature is not available yet. Check
                  back soon!!
                </Dialog.Title>
                <Dialog.Button label="Close" visible = {false} onPress = {()=> {
                  console.log('closed')
                }}/>
              </Dialog.Container>;
              }}
            />}
          centerComponent={{ text: "CHEF'S CHOICE", style: { color: "#fff" } }}
          rightComponent={<CookbookIcon userId={this.props.sessionInfo.id} />}
        />
        <Dialog.Container visible={this.state.visible}>
          <Dialog.Title>Recipe Search</Dialog.Title>
          <Dialog.Description>
            Please enter a main ingredient you would like to include.
          </Dialog.Description>
          <Dialog.Input placeholder="Beef" onChangeText={this.handleInput} />
          <Dialog.Button
            label="Submit"
            onPress={() => {
               return this.setState({
                visible: false,
                input: this.state.input,
                api: this.setApi(this.state.input)})
            }}
          />
        </Dialog.Container>
        {view}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: "#F73F07",
    borderRadius: 10,
    marginTop: 25,
    alignItems: "center"
  },
  headerOuterContainer: {
    justifyContent: "flex-start",
    minWidth: "100%",
    borderBottomWidth: 0,
    marginBottom: 0,
    backgroundColor: "#F73F07",
    paddingTop: 0
  },

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },

  Header: {
    justifyContent: "flex-start"
  }
});
