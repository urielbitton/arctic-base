import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ActorCard(props) {

  const {cardWidth, cardHeight} = props
  const {image_url, name} = props.actor
  const navigation = useNavigation() 

  return (
    <TouchableOpacity 
      style={[styles.slideCard, {width: cardWidth, height: cardHeight}]} 
      activeOpacity={0.7}
      onPress={() => navigation.navigate('ActorScreen', props.actor)}
    >
      <Image 
        source={{uri:image_url}} 
        style={[styles.img, {height: '100%'}]} 
      />
      <View>
        <Text style={styles.title} numberOfLines={1}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    borderRadius: 10
  },
  title: {
    zIndex: 10,
    color: '#f1f1f1',
    marginTop: 7,
    fontSize: 12
  }
});