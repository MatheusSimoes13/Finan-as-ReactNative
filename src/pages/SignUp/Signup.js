import React, { useContext, useState } from "react";
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from "../SignIn/style";
import { AuthContext } from "../../contexts/auth";
const SignUp = ({ }) => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useContext(AuthContext)

  function handleSignUp(){
    signUp(email, password, nome)
  }

  return (
    <Background>
      <Container>
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={text => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

      </Container>
    </Background>
  )
}

export default SignUp