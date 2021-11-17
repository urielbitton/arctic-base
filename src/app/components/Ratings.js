import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function Ratings(props) {

  const {rating, color, size=18} = props
  const highestRate = 5
 
  return ( 
    <View style={styles.ratingsContainer}>
      { 
        Array.apply(null, { length: Math.floor(rating) }).map((el,i) => <>
        <FontAwesome name="star" size={size} color={color} style={styles.star} key={i} />
        <View style={{marginRight: 3}} key={i}></View>
        </> ) 
      } 
      { 
        rating % 1 > 0?
        <>
        <FontAwesome name="star-half-full" size={size} color={color} />
        <View style={{marginRight: 3}}></View>
        { Array.apply(null, { length: (highestRate-1)-Math.floor(rating) }).map((el,i) => ( 
          <>
            <FontAwesome name="star-o" size={size} color={color} key={i} />
            <View style={{marginRight: 3}} key={i}></View>
          </>
        )) }
        </>:
        Array.apply(null, { length: highestRate-Math.floor(rating) }).map((el,i) => ( 
          <>
            <FontAwesome name="star-o" size={size} color={color} key={i} /> 
            <View style={{marginRight: 3}} key={i}></View>
          </>
        ))
      }
    </View>
  )
} 

const styles = StyleSheet.create({
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})