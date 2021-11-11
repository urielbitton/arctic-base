import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

export default function SlideCard(props) {

  const {cardWidth, imgOnly} = props
  const {title, Poster, Runtime} = props.film

  return (
    <TouchableOpacity style={[styles.bannerCard, {width: cardWidth}]} activeOpacity={0.8}>
      <Image source={{uri:Poster}} style={styles.posterImg}/>
      {
        !imgOnly ? 
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{Runtime}</Text>
        </View> :
        <Text></Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  slideCard: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  posterImg: {
    width: '100%',
    height: '100%',
    borderRadius: 20
  }
});