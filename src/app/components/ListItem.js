import { Fontisto } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function ListItem(props) {

  const {title, navLink} = props
  const [bgColor, setBgColor] = useState('transparent')
  const navigation = useNavigation()

  return (
    <TouchableOpacity 
      style={[styles.listItem, {backgroundColor: bgColor}]} 
      onPress={() => navigation.navigate(navLink, {title})}
      onPressIn={() => setBgColor('rgba(255,255,255,0.1)')} 
      onPressOut={() => setBgColor('transparent')} 
      activeOpacity={0.9}
      key={title}
    >
      <>
        <Text style={styles.listItemText}>{title}</Text>
        <Fontisto name="angle-right" size={20} color="#fff" />
      </>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)'
  },
  listItemText: {
    fontSize: 18,
    color: '#fff'
  }
})
