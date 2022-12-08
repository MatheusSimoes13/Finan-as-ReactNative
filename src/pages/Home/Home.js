import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../contexts/auth";

const Home = ({}) => {

  const { user, signOut } = useContext(AuthContext)

  return(
    <View>
      <Text>{ user && user.email}</Text>
      <Text>{ user && user.nome }</Text>
      <Button
      title="Sair da conta"
      onPress={() => signOut()} />
    </View>
  )
}

export default Home