import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Modal,
  Alert
} from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import SwipeCards from "./SwipeCards.js";
import Dialog from "react-native-dialog";

export default class AppScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      text: "",
      recipes: [],
      input: null
    }
    // this.renderRecipe = this.renderRecipe.bind(this)
  }

  handleInput = text => {
    this.setState({ input: text });
  };
// componentDidUpdate(input){
  setApi(input) {

      input = this.state.input
      if (input !== null) {
         fetch(`https://api.edamam.com/search?q=${input}&to=30&app_id=03b9b48e&app_key=b5f03ee3a86824849490d1ffc2d0fa6e`)
           .then(response => {
             return response.json();
           })
           .then(recipes => {
             this.setState({ recipes: recipes.hits });
             return recipes;
           })

      }


        //  }
        }
        // renderRecipe(){
        //     if(this.state.recipes.length > 0) {
        //       console.log('Im hit');
        //       return <SwipeCards style={{ flex: 1 }} recipes={this.state.recipes} />;
        //     }
        // }
  render() {
    let view;
    let loading;
    if(this.state.recipes.length > 0) {
      view = <View>
          <SwipeCards style={{ flex: 1 }} recipes={this.state.recipes} />
          <Button title="Logout" onPress={this.props.logoutCallback} />
        </View>;
    }
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Dialog.Container visible={this.state.visible}>
          <Dialog.Title>Recipe Search</Dialog.Title>
          <Dialog.Description>
            Please enter a main ingredient you would like to include.
          </Dialog.Description>
          <Dialog.Input placeholder="Beef" onChangeText={this.handleInput} />
          <Dialog.Button label="Submit" onPress={() => {
              return this.setState({
                visible: false,
                input: this.state.input,
                api: this.setApi(this.state.input),
                // render: this.renderRecipe()
              });
            }} />
        </Dialog.Container>
        {view}

      </View>
  }
}

const styles = StyleSheet.create({
});
