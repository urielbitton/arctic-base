import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import {alternativeAPI} from '../api/imdbAPI'
import YoutubePlayer from 'react-native-youtube-iframe';
import Screen from '../components/Screen'
import { styles } from '../styles/MovieScreen';
import { Fontisto, FontAwesome  } from '@expo/vector-icons';
import Colors from '../utils/Colors';
import {LinearGradient} from 'expo-linear-gradient'

export default function MovieScreen(props) {

  const {imdbID, Title, Poster, Runtime, imdbRating} = props.route.params
  const [altFilm, setAltFilm] = useState({})

  useEffect(() => {
    alternativeAPI(imdbID, setAltFilm)
  },[imdbID])

  return (
    <Screen>
      <View style={styles.trailerContainer}>
        <View style={styles.movieHeader}>
          <View style={styles.titleFlex}>
            <Fontisto name="angle-left" size={24} color="#fff" />
            <Text style={styles.pageTitle}>{Title}</Text>
          </View>
          <View style={styles.titleFlex}>
          <FontAwesome name="imdb" size={28} color={Colors.gold} />
          <Text style={styles.rating}>{imdbRating}</Text>
          </View>
        </View>
        <LinearGradient
          colors={['rgba(14, 19, 28,1)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientCoverTop}
        >
        </LinearGradient>
        <Image 
          style={styles.coverImg}
          source={{uri: Poster}}
        />
        <LinearGradient
          colors={['rgba(14, 19, 28,1)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.gradientCoverBottom}
        >
        </LinearGradient>
      </View>
    </Screen>
  )
}
