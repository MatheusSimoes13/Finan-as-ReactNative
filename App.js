
import React from "react";
import { StatusBar, Text, View } from "react-native";
import firebase from "./src/services/firebaseConnection";
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

const App = ({}) => {

  return(
    <NavigationContainer>
      <StatusBar backgroundColor={'#131313'} barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  )

}

export default App