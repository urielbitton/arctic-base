import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Picker, Text, View } from 'react-native'
import { getMoviesByYearAndGenre } from '../api/imdbAPI'
import PageBar from '../components/PageBar'
import SlideCard from '../components/SlideCard'
import { styles } from '../styles/GenreScreen'
import {StoreContext} from '../store/context'
import {searchYears} from '../api/filmsAPI'

export default function GenreScreen(props) {

  const {genresDisplayLimit, setGenresDisplayLimit} = useContext(StoreContext)
  const {title} = props.route.params
  const [movieResults, setMovieResults] = useState([])
  const [yearSelected, setYearSelected] = useState('')

  const ListHeaderComponent = <>
    <PageBar title={title} subtitle={movieResults.length + ' records available'} paddingHorizontal={0} style={{paddingTop:20, marginBottom: 10}} />
    <View style={styles.toolbar}>
      <Text style={styles.toolbarTitle}>Filters</Text>
      <Picker
        selectedValue={yearSelected}
        style={styles.inputPicker}
        onValueChange={(itemValue, itemIndex) => setYearSelected(itemValue)}
        itemStyle={styles.pickerItems}
      >
        {yearsPickerItems}
      </Picker>
    </View>
  </>

const yearsPickerItems = searchYears?.map((year,i) => {
  return <Picker.Item label={year.year} value={year.year} key={year.year} />
})

  useEffect(() => {
    getMoviesByYearAndGenre(title, yearSelected, genresDisplayLimit, setMovieResults)
  },[title, genresDisplayLimit])

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
