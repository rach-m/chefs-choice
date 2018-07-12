// SwipeCards.js
"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppScreen from "./AppScreen";
import SwipeCards from "react-native-swipe-cards";
// import searchInput from "./searchApi";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let recipes = this.props.recipes;
    return (
      <View style={[styles.card]}>
        <Image
          style={styles.foodImage}
          source={{ uri: this.props.image }}
        />
        <Text>{this.props.text}</Text>
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
    console.log(recipes);
    this.state = {
      cards: []
    };
    recipes.forEach(recipeArray => {
      this.state.cards.push({
        text: recipeArray.recipe.label,
        image: recipeArray.recipe.image
      });
    });
  }

  handleYup(card) {
    console.log(`Yup for ${card.text}`);
  }
  handleNope(card) {
    console.log(`Nope for ${card.text}`);
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
  }
  render() {
    console.log("i work");
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}

    return (
      <View>
        <SwipeCards
          cards={this.state.cards}
          renderCard={cardData => <Card {...cardData} />}
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
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: 'black',
    borderWidth: 3,
    paddingBottom: 45,
    zIndex: 2,
    borderRadius: 15,
  },
  foodImage: {
    height: 300,
    width: 300,
    borderRadius: 15,
  },
  noMoreCardsText: {
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
});
