import React, {useEffect, useState} from 'react'
import { FlatList, View } from 'react-native';
import { styles } from '../styles/Categories';
import PageBar from '../components/PageBar'
import { getAllGenres } from '../api/imdbAPI';
import ListItem from '../components/ListItem';

export default function Categories() {

  const [genres, setGenres] = useState([])

  useEffect(() => { 
    getAllGenres(setGenres)
  },[])

  return (
    <FlatList
      data={genres}
      renderItem={genre => 
        <ListItem title={genre.item.genre} navLink="GenreScreen" /> 
      }
      keyExtractor={item => item.genre}
      style={styles.listPage}
      ListHeaderComponent={
        <View style={{paddingTop: 20}}>
          <PageBar title="Categories" subtitle="Find titles by genre." />
        </View>
      }
    />
  )
}
