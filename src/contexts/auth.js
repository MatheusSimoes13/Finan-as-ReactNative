import AsyncStorage from "@react-native-community/async-storage";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { child, onValue, ref, set } from "firebase/database";
import React, { createContext, useEffect, useState } from "react";
import { get } from "react-native/Libraries/Utilities/PixelRatio";
import { app, auth, database } from "../services/firebaseConnection";
export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem('Auth_user')

      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
      setLoading(false)
    }

    loadStorage()
  }, [])

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
              storageUser(data)
            })
            .catch(err => console.log(err))
          }).catch(err => console.log(err))
  }

  async function signIn(email, password){
    await signInWithEmailAndPassword(auth, email, password)
    .then(async(value)=>{
      let uid = value.user.uid
      await get(child(database, `users/${uid}`))
      .then(snapshot => {
        let data = {
          uid: uid,
          nome: snapshot.val().nome,
          email: value.user.email
        }

        setUser(data)
        storageUser(data)
      })

    })
    .catch(err => {
      alert(err)
    })
  }

  async function storageUser(data){
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
  }

  return(
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, loading}}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider