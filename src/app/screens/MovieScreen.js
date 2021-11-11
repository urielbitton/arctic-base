import React, { useEffect, useState } from 'react'
import { Image, Text, View, TouchableOpacity, Linking } from 'react-native'
import {alternativeAPI} from '../api/imdbAPI'
import YoutubePlayer from 'react-native-youtube-iframe';
import Screen from '../components/Screen'
import { styles } from '../styles/MovieScreen';
import { Fontisto, FontAwesome, Ionicons    } from '@expo/vector-icons';
import Colors from '../utils/Colors';
import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export default function MovieScreen(props) {

  const {imdbID, Title, Poster, imdbRating, Director, Genre, Runtime, Released, Plot} = props.route.params
  const [altFilm, setAltFilm] = useState({})
  const navigation = useNavigation() 

  useEffect(() => {
    alternativeAPI(imdbID, setAltFilm)
  },[imdbID])

  return (
    <Screen>
      <View style={styles.trailerContainer}>
        <View style={styles.movieHeader}>
          <View style={styles.titleFlex}>
            <Fontisto name="angle-left" size={20} color="#fff" onPress={() => navigation.goBack()} />
            <Text style={styles.pageTitle} numberOfLines={1}>{Title}</Text>
          </View>
          <View style={styles.titleFlex}>
          <FontAwesome name="imdb" size={27} color={Colors.gold} />
          <Text style={styles.rating}>{imdbRating}</Text>
          </View>
        </View>
        <LinearGradient
          colors={['rgba(14, 19, 28,1)', 'transparent']}
          start={{ x: 0, y: 0.05 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientCoverTop}
        >
        </LinearGradient>
        <Image 
          style={styles.coverImg}
          source={{uri: Poster}}
        />
        <TouchableOpacity style={styles.playCircle} onPress={() => Linking.openURL(`https://www.imdb.com/title/${imdbID}`)}>
          <Ionicons name="play" size={50} color="#fff" style={styles.playIcon} />
        </TouchableOpacity>
        <LinearGradient
          colors={['rgba(14, 19, 28,1)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.05 }}
          style={styles.gradientCoverBottom}
        >
        </LinearGradient>
      </View>
      <View style={styles.briefInfoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Director</Text>
          <Text style={styles.infoText}>{Director}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Genre</Text>
          <Text style={styles.infoText}>{Genre}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Time</Text>
          <Text style={styles.infoText}>{Runtime}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Release Date</Text>
          <Text style={styles.infoText}>{Released??"N/A"}</Text>
        </View>
        <Text style={styles.plotText}>{Plot}</Text>
      </View>
    </Screen>
  )
}
