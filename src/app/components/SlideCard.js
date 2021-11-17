import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { getOneMovie } from '../api/imdbAPI'

export default function SlideCard(props) {

  const {cardWidth, imgOnly, height='100%', imgHeight=200, style} = props
  const {imdb_id} = props.film
  const [movie, setMovie] = useState({})
  const navigation = useNavigation() 

  useEffect(() => {
    getOneMovie(imdb_id, setMovie)
  },[imdb_id])

  return (
    <TouchableOpacity 
      style={[styles.slideCard, style, {width: cardWidth, height}]} 
      activeOpacity={0.7}
      onPress={() => navigation.navigate('MovieScreen', movie)}
    >
      <Image 
        source={{uri:movie?.Poster}} 
        style={[styles.posterImg, {height: imgOnly ? "100%" : imgHeight}]} 
      />
      <View style={{display: imgOnly ? "none" : "flex"}}>
        <Text style={styles.title} numberOfLines={1}>{movie?.Title}</Text>
        <Text style={styles.subtitle}>{movie?.Runtime}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  slideCard: {
    
  },
  posterImg: {
    width: '100%',
    borderRadius: 20
  },
  title: {
    zIndex: 10,
    color: '#f1f1f1',
    marginTop: 7,
    fontSize: 12
  },
  subtitle: {
    color: '#999',
    marginTop: 4,
    fontSize: 10
  }
});