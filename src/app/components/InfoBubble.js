import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { getActorById } from '../api/imdbAPI';
import Colors from '../utils/Colors';
import { useNavigation } from '@react-navigation/native'

export default function InfoBubble(props) {

  const {navigationLink, personObject, personImgUrl, title, subtitle} = props
  const navigation = useNavigation()

  return (
    <TouchableOpacity 
      style={styles.infoBubble} 
      activeOpacity={0.8}
      onPress={() => navigation.navigate(navigationLink, personObject)}
    >
      <Image style={styles.bubbleImg} source={{uri: personImgUrl}}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({ 
  infoBubble: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    marginVertical: 15
  },
  bubbleImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 5
  },
  title: {
    color: '#fff',
    marginBottom: 2,
    fontSize: 11
  },
  subtitle: {
    color: Colors.gray,
    fontSize: 10
  }
})