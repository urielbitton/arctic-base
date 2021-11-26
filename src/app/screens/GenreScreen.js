import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Picker, Text, View } from 'react-native'
import { getMoviesByYearAndGenre } from '../api/imdbAPI'
import PageBar from '../components/PageBar'
import SlideCard from '../components/SlideCard'
import { styles } from '../styles/GenreScreen'
import {StoreContext} from '../store/context'
import {searchYears} from '../api/filmsAPI'
import BackBar from '../components/BackBar'
import { Feather   } from '@expo/vector-icons'
import { Input } from 'react-native-elements'

export default function GenreScreen(props) {

  const {genresDisplayLimit, setGenresDisplayLimit} = useContext(StoreContext)
  const {title} = props.route.params
  const [movieResults, setMovieResults] = useState([])
  const [yearSelected, setYearSelected] = useState(new Date().getFullYear())
  const [yearText, setYearText] = useState('')

  const ListHeaderComponent = <>
    <PageBar title={title} subtitle={movieResults.length + ' records displayed'} paddingHorizontal={0} style={{paddingTop:20, marginBottom: 10}} />
    <BackBar 
      barStyles={{paddingHorizontal: 0, paddingVertical: 10, marginTop: 10}}
      secondIcon={<Feather name="info" size={24} color="#fff" />} 
    />
    <View style={styles.toolbar}>
      <View style={styles.toolbarTitle}>
        <Text style={styles.toolbarTitleText}>Year:</Text>
        <Text style={styles.yearSelected}>{yearSelected}</Text>
      </View>
      <Input 
        placeholder="Filter by year"
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.inputContainerStyle}
        containerStyle={styles.inputContainer}
        onChangeText={(value) => setYearText(value)}
        onSubmitEditing={() => setYearSelected(yearText)}
      />
    </View>
  </>

  useEffect(() => {
    getMoviesByYearAndGenre(title, yearSelected, genresDisplayLimit, setMovieResults)
  },[title, genresDisplayLimit, yearSelected])

  useEffect(() => {
    return() => setGenresDisplayLimit(20)
  },[])

  return (
    <FlatList
      data={movieResults} 
      renderItem={movie => 
        <SlideCard film={movie.item} height={200} cardWidth={100} imgHeight={160} style={{marginRight:10, marginBottom: 30}}/>
      }
      keyExtractor={item => item.imdb_id}
      contentContainerStyle={styles.flatListContainer}
      style={styles.flatList}
      numColumns={3} 
      maxToRenderPerBatch={20}
      onEndReached={() => setGenresDisplayLimit(prev => prev + 20)}
      onEndReachedThreshold={0.8}
      ListHeaderComponent={ListHeaderComponent}
      getItemLayout={(data, index) => (
        {length: 200, offset: 200 * index, index}
      )}
    />
  )
}
