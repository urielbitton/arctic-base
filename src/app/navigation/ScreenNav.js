import React, { useContext, useRef, useState } from 'react'
import { View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StoreContext } from '../store/context'
import BottomNav from './BottomNav'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../auth/LoginScreen'
import firebase from 'firebase'
import RegisterScreen from '../auth/RegisterScreen'
import {styles} from '../styles/ScreenNav'
import MovieScreen from '../screens/MovieScreen'
import ActorScreen from '../screens/ActorScreen'
import SearchScreen from '../screens/SearchScreen'

export default function ScreenNav(props) {

  const {pageTitle} = useContext(StoreContext)
  const [showOverlay, setShowOverlay] = useState(false)
  const Stack = createStackNavigator()
  const navigRef = useRef() 

  const confirmLogOut = () => {
    firebase.auth().signOut().then(() => {
      setShowOverlay(false)
    })
  }

  return ( 
    <View style={styles.homecont}> 
      <NavigationContainer ref={navigRef}>
        <Stack.Navigator headerMode={false} initialRouteName="Home">  
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="MovieScreen" component={MovieScreen} />
          <Stack.Screen name="ActorScreen" component={ActorScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
        <BottomNav navigRef={navigRef} />
      </NavigationContainer>
    </View> 
  )
}


