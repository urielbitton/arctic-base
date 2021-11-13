import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native'

export default function PageBar(props) {

  const {title, subtitle, setIsSheetVisible} = props

  return (
    <View style={styles.pageBar}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <TouchableOpacity onPress={() => setIsSheetVisible(true)} style={styles.profilePicContainer} activeOpacity={0.8}>
        <Image source={{uri:'https://i.imgur.com/nwNCgta.jpg'}} style={{width:'100%',height:'100%'}}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ 
  pageBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 20 
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700'
  },
  subtitle: {
    fontSize: 15,
    color: '#eee',
    marginTop: 8
  },
  profilePicContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden'
  },
})