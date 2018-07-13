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
      <View style={[styles.card]}>
        <Image style={styles.foodImage} source={{ uri: this.props.image }} />
        <Text>{this.props.text}</Text>
        {this.props.ingredients.map(ingredient => {
          return <Text style={styles.ingredients}>{ingredient}</Text>;
        })}
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
        <Text style={styles.noMoreCardsText}>Check out your cookbook!</Text>
      </View>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
     let recipes = this.props.recipes;
    // console.log(recipes)
    this.state = {
      cards: []
    };
    recipes.forEach(recipeArray => {
      this.state.cards.push({
        text: recipeArray.recipe.label,
        image: recipeArray.recipe.image,
        ingredients: recipeArray.recipe.ingredientLines
      });
    });
    // this.saveRecipe = this.saveRecipe.bind(this)
  }

  saveRecipe(card) {
    this.props.recipes.forEach(recipeArray => {
      let url = recipeArray.recipe.url;
    });
    fetch("https://data.broadcasting79.hasura-app.io/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recipe_name: card.text,
        recipe_link: this.props.url,
        recipe_image: card.image
      })
    })
    return console.log("posted");
  };


  handleYup(card) {
    console.log(`Yup for ${card.text}`)
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
  if (this.handleYup)
{
    let card = <Card />;
    this.saveRecipe(card)
  }
    return (
      <View>
        <SwipeCards
          cards={this.state.cards}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          handleYup={this.handleYup}
          onPress = {this.saveRecipe}
          handleNope={this.handleNope}
          handleMaybe={this.handleMaybe}
          hasMaybeAction
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    paddingBottom: 15,
    zIndex: 2,
    borderRadius: 15,
    maxHeight: 400,
    maxWidth: 300,
    overflow: "hidden"
  },
  foodImage: {
    height: 250,
    width: 250,
    maxHeight: 250,
    borderRadius: 10
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
