import React from "react";
import { StatusBar } from "react-native";
import firebase from "./src/services/firebaseConnection";
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth'

import Routes from './src/routes/index'

const App = ({ }) => {

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={'#131313'} barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )

}

export default App