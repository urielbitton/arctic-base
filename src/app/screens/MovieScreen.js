import React, { useEffect, useState } from 'react'
import { Image, Text, View, TouchableOpacity, Linking } from 'react-native'
import {getAltMovie} from '../api/imdbAPI'
import YoutubePlayer from 'react-native-youtube-iframe';
import Screen from '../components/Screen'
import { styles } from '../styles/MovieScreen';
import { Fontisto, FontAwesome, Ionicons    } from '@expo/vector-icons';
import Colors from '../utils/Colors';
import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import ActorBubble from '../components/ActorBubble';
import CrewBubble from '../components/CrewBubble';

export default function MovieScreen(props) {

  const {imdbID, Title, Poster, imdbRating, Director, Genre, Runtime, Released, 
    Plot, Writer, BoxOffice, Awards, Rated, Production, Year, Country, imdbVotes, 
    Website, DVD} = props.route.params
  const [altFilm, setAltFilm] = useState({})
  const navigation = useNavigation() 

  const actorsRender = altFilm?.cast?.slice(0,5).map(actor => {
    return <ActorBubble actor={actor} key={actor.actor_id} />
  })
  const crewRender = Writer?.split(',')?.map(crew => {
    return <CrewBubble crew={crew} subtitle="Writer" key={crew} />
  })

  const infoArray = [
    {label: 'Director', text: Director},
    {label: 'Genre', text: Genre},
    {label: 'Runtime', text: Runtime},
    {label: 'Release Date', text: Released},
    {label: 'Box Office', text: BoxOffice},
    {label: 'Awards & Nominations', text: Awards},
    {label: 'Production', text: Production},
    {label: 'Rating', text: Rated},
    {label: 'Year', text: Year},
    {label: 'Country', text: Country},
    {label: 'IMDB Rating', text: imdbRating},
    {label: 'IMDB Votes', text: imdbVotes},
    {label: 'DVD Release', text: DVD},
    {label: 'Website', text: Website},
  ]

  const infoRender1 = infoArray?.slice(0,4).map(info => {
    return <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{info.label}</Text>
      <Text style={styles.infoText}>{info.text ?? "N/A"}</Text>
    </View>
  })
  const infoRender2 = infoArray?.slice(4).map(info => {
    return <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{info.label}</Text>
      <Text style={styles.infoText}>{info.text ?? "N/A"}</Text>
    </View>
  })
  
  useEffect(() => {
    getAltMovie(imdbID, setAltFilm)
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
        {infoRender1}
        <Text style={styles.plotText}>{Plot}</Text>
      </View>
      <View style={styles.seperatorContainer}>
        <View style={styles.seperator}/>
      </View>
      <View style={styles.actorsContainer}>
        <Text style={styles.rowTitle}>Actors</Text>
        {actorsRender}
      </View>
      <View style={styles.actorsContainer}>
        <Text style={styles.rowTitle}>Director</Text>
        <CrewBubble crew={Director} subtitle="Director" />
      </View>
      <View style={styles.actorsContainer}>
        <Text style={styles.rowTitle}>Writers</Text>
        {crewRender}
      </View>
      <View style={styles.briefInfoContainer}>
        <Text style={[styles.rowTitle, {paddingHorizontal: 0, marginBottom: 35}]}>More Info</Text>
        {infoRender2}
      </View>
    </Screen>
  )
}
