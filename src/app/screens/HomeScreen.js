import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from '../styles/HomeScreen';
import { StoreContext } from '../store/context';
import { useNavigation } from '@react-navigation/native'
import Screen from '../components/Screen'
import Slider from '../components/Slider'
import { getMultipleMovies } from '../api/imdbAPI';
import BottomOptions from '../components/BottomOptions';
import Colors from '../utils/Colors';
import MovieCatRow from '../components/MovieCatRow';

export default function HomeScreen() {
 
  const {setPageTitle, user} = useContext(StoreContext)
  const [bannerMovies, setBannerMovies] = useState([])
  const [newReleases, setNewReleases] = useState([])
  const [selectedPage, setSelectedPage] = useState(0);
  const [isSheetVisible, setIsSheetVisible] = useState(false)
  const navigation = useNavigation() 

  const bannerArr = [
    {id: 'tt1270797', title: 'Venom'},
    {id: 'tt1160419', title: 'Dune'},
    {id: 'tt4154796', title: 'Avengers: Endgame'},
    {id: 'tt9032400', title: 'Eternals'},
    {id: 'tt0293429', title: 'Mortal Kombat'},
    {id: 'tt9376612', title: 'Shang Chi'},
    {id: 'tt4633694', title: 'Spider Man: Into The Spider-Verse'},
    {id: 'tt2382320', title: 'James Bond'},
  ]
  const newReleasesArr = [
    {id: 'tt3480822', title: 'Black Widow'},
    {id: 'tt8404256', title: 'Snake Eyes'},
    {id: 'tt6264654', title: 'Free Guy'},
    {id: 'tt6654210', title: 'Infinite'},
    {id: 'tt10954652', title: 'Old'},
  ]

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
    getMultipleMovies(bannerArr, setBannerMovies)
    getMultipleMovies(newReleasesArr, setNewReleases)
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
          height={550}
          imgOnly
        />
      </View>
      <BottomOptions 
        list={list} 
        isSheetVisible={isSheetVisible}
        setIsSheetVisible={setIsSheetVisible}
      />
      <View style={styles.newReleasesRow}>
        <MovieCatRow 
          moviesArr={newReleases}
          title="New Releases"
          subtitle="View All"
        />
      </View>
    </Screen>
  ) 
}


 