import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../../contexts/auth";

const Home = ({}) => {

  const { user } = useContext(AuthContext)

  return(
    <View>
      <Text>HOME</Text>
      <Text>{ user && user.nome }</Text>
    </View>
  )
}

export default Home