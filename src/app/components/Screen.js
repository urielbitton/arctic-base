import React from 'react'
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import Constants from 'expo-constants';
import Colors from '../utils/Colors';

export default function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ScrollView>
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