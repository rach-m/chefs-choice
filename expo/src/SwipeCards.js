// SwipeCards.js
"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import AppScreen from "./AppScreen";
import SwipeCards from "react-native-swipe-cards";
import { ListItem } from "react-native-elements";
// import searchInput from "./searchApi";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let recipes = this.props.recipes;

    return (
      <View style={[styles.card]} userId={this.props.userId}>
        <Image style={styles.foodImage} source={{ uri: this.props.image }} />
        <Text>{this.props.text}</Text>

        {this.props.ingredients.map((ingredient, i) => {
          return <Text key={i} style={styles.ingredients}>{ingredient}</Text>;
        })}
        {/* <Text>{this.props.url}</Text> */}
      </View>
    );
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more recipes.</Text>
        <Text style={styles.noMoreCardsText}>Check out your cookbook! </Text>
      </View>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    let recipes = this.props.recipes;
    this.state = { cards: [] };
    recipes.forEach(recipeArray => {
      this.state.cards.push({
        key: recipeArray.recipe.url,
        text: recipeArray.recipe.label,
        image: recipeArray.recipe.image,
        ingredients: recipeArray.recipe.ingredientLines,
        url: recipeArray.recipe.url,
        user_id: this.props.userId
      });
    });
  }

  handleYup(card) {
    console.log(`Yup for ${card.text}`);
    var url =
      "https://data.broadcasting79.hasura-app.io/api/1/table/favorites/insert";

    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        objects: [
          {
            recipe_name: card.text,
            recipe_link: card.url,
            recipe_image: card.image,
            hasura_id: card.user_id
          }
        ]
      })
    };
    fetch(url, requestOptions)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error) {
        console.log("Request Failed:" + error);
      });
    console.log("posted");
  }

  handleNope(card) {
    console.log(`Nope for ${card.text}`);
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}

    return (
      <View style={styles.container}>
        <SwipeCards
          cards={this.state.cards}
          renderCard={cardData => <Card  {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          handleMaybe={this.handleMaybe}
          hasMaybeAction
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 400
  },
  card: {

    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    zIndex: 2,
    maxHeight: 400,
    maxWidth: 300,
    overflow: "hidden"
  },
  foodImage: {
    height: 250,
    width: 250,
    maxHeight: 250,
  },
  noMoreCardsText: {
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  ingredients: {
    fontSize: 9,
    maxWidth: 200,
    textAlign: "center"
  }
});
