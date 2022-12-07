import { createUserWithEmailAndPassword } from "firebase/auth";
import { child, set } from "firebase/database";
import React, { createContext, useState } from "react";
import { app, auth, database } from "../services/firebaseConnection";
export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  async function signUp(email, password, nome){
    await createUserWithEmailAndPassword(auth, email, password)
          .then(async (res) => {
            let uid = res.user.uid
            await set(child(database,uid),{
              saldo: 0,
              nome: nome
            })
            .then(() => {
              let data = {
                uid: uid,
                nome: nome,
                email: res.user.email
              }
              setUser(data)
            })
            .catch(err => console.log(err))
          }).catch(err => console.log(err))
  }

  return(
    <AuthContext.Provider value={{ signed: !!user, user, signUp}}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider