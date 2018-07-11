"use strict";

import React, { Component } from "react";
import input from './AppScreen'
import { StyleSheet, Text, View, Image } from "react-native";

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
  }
  componentDidMount() {
      fetch(`https://api.edamam.com/search?q=${input}&app_id=03b9b48e&app_key=b5f03ee3a86824849490d1ffc2d0fa6e`)
        .then(response => {
          return response.json();
        })
        .then(json => {
          const recipes = json.map(recipe => {
            return console.log(recipe.hits.recipe.uri);
          });

          this.setState({ recipes });
        });
    };
  render() {
    return;
  }
}

const styles = StyleSheet.create({});
