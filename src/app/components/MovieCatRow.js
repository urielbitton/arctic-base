import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import Colors from '../utils/Colors';
import Slider from './Slider';

export default function MovieCatRow(props) {
  
  const {moviesArr, title, subtitle} = props
  
  return (
    <View style={styles.rowContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.moviesRow}>
        <Slider 
          moviesSlide={moviesArr} 
          height={200}
          cardWidth={120}
          peek={30}
          pageMargin={-140}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
  header: {
    paddingHorizontal: 30,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  moviesRow: {

  },
  title: {
    fontSize: 25,
    color: '#fff'
  },
  subtitle: {
    fontSize: 16,
    color: Colors.color
  }
})
