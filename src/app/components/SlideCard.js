import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SlideCard(props) {

  const {cardWidth, imgOnly} = props
  const {Title, Poster, Runtime} = props.film
  const navigation = useNavigation() 

  return (
    <TouchableOpacity 
      style={[styles.slideCard, {width: cardWidth}]} 
      activeOpacity={0.7}
      onPress={() => navigation.navigate('MovieScreen', {
        Title, Poster, Runtime
      })}
    >
      <Image 
        source={{uri:Poster}} 
        style={[styles.posterImg, {height: imgOnly ? "100%" : 200}]} 
      />
      <View style={{display: imgOnly ? "none" : "flex"}}>
        <Text style={styles.title} numberOfLines={1}>{Title}</Text>
        <Text style={styles.subtitle}>{Runtime}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  slideCard: {
    height: '100%'
  },
  posterImg: {
    width: '100%',
    borderRadius: 20
  },
  title: {
    zIndex: 10,
    color: '#f1f1f1',
    marginTop: 7
  },
  subtitle: {
    color: '#999',
    marginTop: 5
  }
});