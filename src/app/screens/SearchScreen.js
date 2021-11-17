import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import PageBar from '../components/PageBar';
import Screen from '../components/Screen'
import { styles } from '../styles/SearchScreen';
import Colors from '../utils/Colors';
import { AntDesign } from '@expo/vector-icons';
import SliderRow from '../components/SliderRow'
import { getAllGenres, getMultipleActors, mainSearch } from '../api/imdbAPI';
import cinemaImg from '../assets/imgs/cinema.jpg'
import yearsImg from '../assets/imgs/years.jpg'
import { searchActors, searchYears } from '../api/filmsAPI'
import SearchCard from '../components/SearchCard';

export default function SearchScreen() {

  const [searchResults, setSearchResults] = useState([])
  const [isSheetVisible, setIsSheetVisible] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [submitKeyword, setSubmitKeyword] = useState('')
  const [allGenres, setAllGenres] = useState([])
  const [allActors, setAllActors] = useState([])

  const searchResultsRender = searchResults?.map(res => {
    return <SearchCard result={res} key={res.imdb_id} />
  })

  useEffect(() => {
    getAllGenres(setAllGenres)
    getMultipleActors(searchActors, setAllActors)
  },[])

  useEffect(() => {
    if(submitKeyword.length)
      mainSearch(submitKeyword, setSearchResults)
  },[submitKeyword])

  return (
    <Screen>
      <View style={styles.searchHeader}>
        <PageBar
          title="Search"
          subtitle={(searchResults.length > 0 ? searchResults.length : '3,045,479') + " records available"}
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
            onSubmitEditing={() => setSubmitKeyword(keyword)}
            onClear={() => {setSubmitKeyword('');setSearchResults([])}}
            onCancel={() => {setSubmitKeyword('');;setSearchResults([])}}
            searchIcon={
              <AntDesign name="search1" size={21} color={Colors.gray} style={{paddingLeft: 10}} />
            }
          />
        </View>
      </View>
      <View style={[styles.prefillContainer, {display: submitKeyword.length ? 'none' : 'flex'}]}>
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
          height={150}
          cardHeight={100}
          cardWidth={100}
        />
        <SliderRow 
          slidesArr={allActors}
          title="By Year"
          subtitle="View All"
          coverImg={yearsImg}
          peek={70}
          pageMargin={0}
          height={130}
          searchCard
          slidesArr={searchYears}
        />
      </View>
      <View style={styles.resultsContainer}>
        {searchResultsRender}
      </View>
    </Screen>
  )
}

