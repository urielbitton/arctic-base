import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from '../styles/HomeScreen';
import { StoreContext } from '../store/context';
import { useNavigation } from '@react-navigation/native'
import Screen from '../components/Screen'
import Slider from '../components/Slider'
import { getMultipleMovies, getSupNewMovies, getSupNewSeries, getSupUpcomingMovies, getSupUpcomingSeries } from '../api/imdbAPI';
import BottomOptions from '../components/BottomOptions';
import Colors from '../utils/Colors';
import MovieCatRow from '../components/MovieCatRow';
import { bannerFilms } from '../api/filmsAPI';

export default function HomeScreen() {
 
  const {setPageTitle, user} = useContext(StoreContext)
  const [bannerMovies, setBannerMovies] = useState([])
  const [newReleases, setNewReleases] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [newSeries, setNewSeries] = useState([])
  const [upcomingSeries, setUpcomingSeries] = useState([])
  const [selectedPage, setSelectedPage] = useState(0);
  const [isSheetVisible, setIsSheetVisible] = useState(false)
  const navigation = useNavigation() 

  const list = [
    { title: 'My Account' },
    { title: 'Settings' },
    { title: 'Log Out' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: Colors.color },
      titleStyle: { color: 'white' },
      onPress: () => setIsSheetVisible(false),
    },
  ]

  useEffect(() => {
    getMultipleMovies(bannerFilms, setBannerMovies)
    getSupNewMovies(setNewReleases)
    getSupUpcomingMovies(setUpcomingMovies)
    getSupNewSeries(setNewSeries)
    getSupUpcomingSeries(setUpcomingSeries)
  },[])

  useEffect(() => setPageTitle('Home'), [navigation]) 

  return (
    <Screen>
      <View style={styles.exploreHeader}>
        <View>
          <Text style={styles.title}>Explore</Text>
          <Text style={styles.subtitle}>Watch the latest releases here.</Text>
        </View>
        <TouchableOpacity onPress={() => setIsSheetVisible(true)} style={styles.profilePicContainer} activeOpacity={0.8}>
          <Image source={{uri:'https://i.imgur.com/nwNCgta.jpg'}} style={{width:'100%',height:'100%'}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.sliderContainer}>
        <Slider 
          moviesSlide={bannerMovies} 
          selectedPage={selectedPage}
          height={500}
          imgOnly
          peek={65} 
          pageMargin={15}
          customCard
        />
      </View>
      <BottomOptions 
        list={list} 
        isSheetVisible={isSheetVisible}
        setIsSheetVisible={setIsSheetVisible}
      />
      <View style={styles.homeMoviesRow}>
        <MovieCatRow 
          moviesArr={newReleases.results}
          title="New Releases"
          subtitle="View All"
        />
      </View>
      <View style={styles.homeMoviesRow}>
        <MovieCatRow 
          moviesArr={upcomingMovies.results}
          title="Upcoming Movies"
          subtitle="View All"
        />
      </View>
      <View style={styles.homeMoviesRow}>
        <MovieCatRow 
          moviesArr={newSeries.results}
          title="New TV Shows"
          subtitle="View All"
        />
      </View>
      <View style={styles.homeMoviesRow}>
        <MovieCatRow 
          moviesArr={upcomingSeries.results}
          title="Upcoming TV Shows"
          subtitle="View All"
        />
      </View>
    </Screen>
  ) 
}


 