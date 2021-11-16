import React, { useContext } from 'react'
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import Constants from 'expo-constants';
import Colors from '../utils/Colors';
import { StoreContext } from '../store/context';

export default function Screen({children, style}) {

  const {scrollTopRef} = useContext(StoreContext)

  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ScrollView ref={scrollTopRef}>
        {children}
      </ScrollView>
    </SafeAreaView>
  ) 
} 

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.dark
  }
})