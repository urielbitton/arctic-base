import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import PageBar from '../components/PageBar';
import Screen from '../components/Screen'
import { styles } from '../styles/SearchScreen';
import Colors from '../utils/Colors';
import { AntDesign } from '@expo/vector-icons';
import SliderRow from '../components/SliderRow'
import { getAllGenres, getMultipleActors } from '../api/imdbAPI';
import cinemaImg from '../assets/imgs/cinema.jpg'
import { searchActors } from '../api/filmsAPI'

export default function SearchScreen() {

  const [resultsFound, setResultsFound] = useState('3,045,479')
  const [isSheetVisible, setIsSheetVisible] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [submit, setSubmit] = useState('')
  const [allGenres, setAllGenres] = useState([])
  const [allActors, setAllActors] = useState([])

  useEffect(() => {
    getAllGenres(setAllGenres)
    getMultipleActors(searchActors, setAllActors)
  },[])

  return (
    <Screen>
      <View style={styles.searchHeader}>
        <PageBar
          title="Search"
          subtitle={resultsFound + " records available"}
          setIsSheetVisible={setIsSheetVisible}
          paddingBottom={0}
        />
        <View style={styles.inputFlexCont}>
          <SearchBar
            placeholder='Search movies, actors, etc.'
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputStyle} 
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setKeyword(text)}
            value={keyword}
            cancelButtonTitle=""
            onSubmitEditing={() => setSubmit(keyword)}
            onClear={() => setSubmit('')}
            searchIcon={
              <AntDesign name="search1" size={21} color={Colors.gray} style={{paddingLeft: 10}} />
            }
          />
        </View>
      </View>
      <SliderRow 
        slidesArr={allGenres}
        title="By Genre"
        subtitle="View All"
        coverImg={cinemaImg}
        searchCard
        peek={70}
        pageMargin={0}
        height={130}
      />
      <SliderRow 
        slidesArr={allActors}
        title="By Actor"
        subtitle="View All"
        peek={120}
        pageMargin={0}
        actorCard
        cardHeight={100}
        cardWidth={100}
      />
    </Screen>
  )
}

