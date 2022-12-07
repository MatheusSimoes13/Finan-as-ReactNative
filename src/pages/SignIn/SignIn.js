import React from "react";
import { View } from "react-native";
import { AreaInput, Background, Container, Input, Link, LinkText, Logo, SubmitButton, SubmitText } from "./style";

const SignIn = ({}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <Background>
      <Container>
        <Logo source={require('../../assets/Logo.png')} />
        <AreaInput>
          <Input 
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={ text => setEmail(text)}
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

        <SubmitButton>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

      </Container>
    </Background>
  )
}

export default SignIn