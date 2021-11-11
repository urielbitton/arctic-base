import React, {createContext, useEffect, useState} from 'react'
import firebase from 'firebase'
import {db} from '../firebase/Fire'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [activeNav, setActiveNav] = useState('')
  const user = firebase.auth().currentUser
  const [myUser, setMyUser] = useState({})
  const [aUser, setAUser] = useState({})
  const [pageTitle, setPageTitle] = useState('Discover')
  const [logAuth, setLogAuth] = useState(true)

  useEffect(() => {
    if(user) {
      db.collection('users').doc(user.uid).onSnapshot(snap => {
        setMyUser(snap.data()) 
      })
    }
  },[user])
 
  return (
    <StoreContext.Provider value={{
      activeNav, setActiveNav, user, myUser, setMyUser, aUser, setAUser, pageTitle, setPageTitle,
      logAuth, setLogAuth
    }}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider