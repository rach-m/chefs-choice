import {Platform} from 'react-native';

const home = {
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FB4D3D",
    paddingBottom: 25,
  },
  header: {
    backgroundColor: "#FB4D3D",
    borderColor: 'transparent',
    borderBottomWidth: 0,
  },
  headerText: {
    // color: Platform.OS === "ios" ? null : "white"
    color: "#FB4D3D",
  },
  button: {
    flexDirection: "row",
    height: 50,
    justifyContent: "flex-start",
    paddingLeft: 40
  },
  homeButtonContainer: {
    flexDirection: "column",
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    // backgroundColor: "#FB4D3D",
  },
  buttonText: {
    fontSize: 15,
    color: "white"
  },
  logoContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#FB4D3D"
  },
  logo: {
    width: 150,
    height: 250
  }
};

const username = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
  },
  headerText: {
    color: (Platform.OS === 'ios') ? null : "white"
  },
  itemContainer: {
    marginVertical: 20,
    marginHorizontal: 40,
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  textbox: {
    height: 40,
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 10
  }
}

const otp = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
  },
  headerText: {
    color: (Platform.OS === 'ios') ? null : "white"
  },
  numberContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'space-around'
  },
  countryCode: {
    height: 40,
    flex: 0.2,
    padding: 10
  },
  number: {
    height: 40,
    flex: 0.8,
    padding: 10
  },
  otp: {
    flex:1,
    height: 80,
    padding: 10,
    width: 100,
    justifyContent: 'flex-end'
  },
  otpTextBox: {
    textAlign: 'center',
    fontSize: 30
  },
  resendText: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
  }
}

const email = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
  },
  headerText: {
    color: (Platform.OS === 'ios') ? null : "white"
  },
  itemContainer: {
    marginVertical: 20,
    marginHorizontal: 40,
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textbox: {
    height: 40,
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 10
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  text: {
    color: 'dimgrey'
  }
}

const index = {
  headerText: {
    color: (Platform.OS === 'ios') ? null : "white"
  }
}

export {
  home,
  username,
  otp,
  email,
  index
}
