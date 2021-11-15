import React from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import Colors from '../utils/Colors'

export default function SearchBox(props) {

  const {coverImg, genre, year} = props

  return (
    <TouchableOpacity style={styles.searchBox} activeOpacity={0.75}>
      <Image source={coverImg} style={styles.coverImg}/>
      <View style={styles.cover}></View>
      <Text style={styles.title}>{genre??year}</Text>
      <Text style={styles.overlay}>{genre}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  searchBox: {
    width: 200,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },  
  cover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.coverBlue
  },  
  coverImg: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 21,
    color: '#fff'
  },
  overlay: {
    position: 'absolute',
    fontSize: 80,
    color: '#fff',
    opacity: 0.07,
    width: 500,
    bottom: -30,
    left: -20,
    textTransform: 'uppercase'
  }
})