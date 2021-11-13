import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements';
import PageBar from '../components/PageBar';
import Screen from '../components/Screen'
import { styles } from '../styles/SearchScreen';

export default function SearchScreen() {

  const [resultsFound, setResultsFound] = useState('3,045,479')
  const [isSheetVisible, setIsSheetVisible] = useState(false)

  return (
    <Screen>
      <View style={styles.searchHeader}>
        <PageBar
          title="Search"
          subtitle={resultsFound + " records available"}
          setIsSheetVisible={setIsSheetVisible}
        />
        <View style={styles.inputFlexCont}>
          <SearchBar
            placeholder='Search movies, actors, genres, etc...'
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputStyle} 
            style={{backgroundColor: 'transparent'}}
          />
        </View>
      </View>
    </Screen>
  )
}

