import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native'

export default function PageBar(props) {

  const {title, subtitle, setIsSheetVisible, paddingHorizontal=20, style} = props

  return (
    <View style={[styles.pageBar, style, {paddingHorizontal}]}>
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
    marginTop: 20,
    alignItems: 'center',
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