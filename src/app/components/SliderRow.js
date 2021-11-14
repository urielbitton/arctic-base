import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import Colors from '../utils/Colors';
import Slider from './Slider';

export default function SliderRow(props) {
  
  const {slidesArr, peek, pageMargin, title, subtitle, customCard, 
    searchCard, actorCard, coverImg, cardWidth=120, cardHeight, height=270} = props
  
  return (
    <View style={styles.rowContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.moviesRow}>
        <Slider 
          slide={slidesArr} 
          height={height}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          peek={peek??110}
          pageMargin={pageMargin??0}
          customCard={customCard}
          coverImg={coverImg}
          searchCard={searchCard}
          actorCard={actorCard}
        />
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({ 
  header: {
    paddingHorizontal: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  moviesRow: {

  },
  title: {
    fontSize: 19,
    color: '#fff'
  },
  subtitle: {
    fontSize: 13,
    color: Colors.color
  }
})
