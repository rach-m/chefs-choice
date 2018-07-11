import React from "react";
import { StyleSheet, View, Text, Button, Image, Modal } from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import SwipeCards from "./SwipeCards.js";

export default class AppScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [], modalVisible:true };
  }

  searchInput(input) {
    fetch(
      `https://api.edamam.com/search?q=${input}&app_id=03b9b48e&app_key=b5f03ee3a86824849490d1ffc2d0fa6e`
    )
      .then(response => {
        return response.json();
      })
      .then(recipes => {


        this.setState({
          recipes: recipes,
          modalVisible: false
        });
        return recipes;
      });
  }

  handleInput = text => {
    this.setState({ input: text });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <Modal visible={this.state.modalVisible} presentationStyle="formSheet">
          <View style={styles.modal}>
            {/* <FormLabel title = '' /> */}
            <FormInput
              onChangeText={this.handleInput}
              placeholder="What are you in the mood for?"
              style={styles.inputStyle}
            />

            <Button
              onPress={() => {
                // this.search(this.state.input);
                this.searchInput(this.state.input);
              }}
              title="Search"
            />
          </View>
        </Modal>
        <SwipeCards style={{ flex: 1 }} />
        <Button title="Logout" onPress={this.props.logoutCallback} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputStyle: {
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
});
