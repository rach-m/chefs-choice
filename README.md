<h1>Chef's Choice</h1>

<br>
<br>
<h3>Technologies:</h3>
<br>
React Native
<br>
Hasura Backend Server
<br>
GraphQl
<br>
Edemam Recipe API
<br>
<br>

Code Snippet - Making sure that the recipe state was updated before the swipeable cards had rendered was a challenge. I solved this using states and a view variable.

```
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
           this.forceUpdate();
          return recipes;
        });
    }
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
            style={styles.Button}
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
                this.setState({ visible: true });
              }}
            />
          }
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

```
<br>
User Stories:
<br>
<br>
As a User I want to be able to go through a collection of recipes quickly
<br>
As a User I want an easy format to go through recipes and easily see the main ingredients
<br>
As a User I want to be able to tailor the recipes I am seeing to my specifications
<br>
As a User I want a way to save recipes so I can reference them later

<br>
<br>
<br>
The creation of this mobile app was a difficult task. Working exclusively with technologies that I hadn't touched before proved to be both challenging and rewarding. I think this app wiould be useful to anyone who cooks. It is an easy and intuitive way to browse recipes using swipe based decision making. I still do not have the ability for a user to conduct another search without refreshing the app, but I am aware of this and working on it. I would like to implement filters as well as well as some way to organize the saved recipes (most likely alphabetically).
<br> <br> <br>

<h3>Screenshots</h3>
<br>

Landing Page:
<br>
<img src = './readme-assets/WhatsApp Image 2018-07-16 at 9.35.22 PM.jpeg'>
<br>

Sign Up:
<br>
<img src = './readme-assets/WhatsApp Image 2018-07-16 at 9.35.42 PM.jpeg'>
<br>

Search:
<br>
<img src = './readme-assets/WhatsApp Image 2018-07-16 at 9.36.40 PM.jpeg'>
<br>

Card View:
<br>
<img src = './readme-assets/WhatsApp Image 2018-07-16 at 9.37.32 PM.jpeg'>
<br>

Cookbook View:
<br>
<img src = './readme-assets/WhatsApp Image 2018-07-16 at 9.38.03 PM.jpeg'>


