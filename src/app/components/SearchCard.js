import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { FontAwesome, AntDesign  } from '@expo/vector-icons';
import Colors from '../utils/Colors';
import Ratings from './Ratings';
import { getOneMovie } from '../api/imdbAPI';
import { styles } from '../styles/SearchCard';
import { useNavigation } from '@react-navigation/native'

export default function SearchCard(props) {

  const {result, type='movie'} = props
  const [movie, setMovie] = useState({})
  const [bg, setBg] = useState('transparent')
  const navigation = useNavigation() 

  useEffect(() => {
    getOneMovie(result.imdb_id, setMovie)
  },[result]) 

  return (
    <TouchableOpacity 
      activeOpacity={0.7} 
      style={[styles.searchCard, {backgroundColor: bg}]}
      onPress={() => navigation.navigate('MovieScreen', movie)}
      onPressIn={() => setBg('rgba(255,255,255,0.03)')}
      onPressOut={() => setBg('transparent')}
    >
      <View style={styles.leftSide}>
        <Image 
          style={styles.img}
          source={{uri:movie?.Poster}}
        />
      </View>
      <View style={styles.rightSide}>
        <View>
          <Text style={styles.title}>{movie?.Title}</Text>
        </View>
        <View>
          <View style={styles.subtitle}>
            <AntDesign name="clockcircleo" size={15} color={Colors.gray} /> 
            <Text style={styles.subtitleText}>{movie?.Runtime}</Text>
          </View>
          <View style={styles.metaText}>
            <Text style={styles.meta}>{movie?.Genre?.split(',')[0]}</Text>
            <Text style={styles.meta}>{movie?.Director?.split(',')[0]}</Text>
            <Text style={styles.meta}>{movie?.Year}</Text>
          </View>
          <View style={styles.ratingsContainer}>
            <Ratings color={Colors.gold} rating={(+movie?.imdbRating/2)}/>
            <Text style={styles.numRating}>({movie?.imdbRating})</Text>
          </View>
        </View>
      </View>
      <FontAwesome name="bookmark-o" size={24} color={Colors.color} style={styles.bookmark} />
    </TouchableOpacity>
  )
}