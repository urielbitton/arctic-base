import React, { useState, useContext, useEffect } from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { AntDesign, FontAwesome  } from '@expo/vector-icons'
import Colors from '../utils/Colors' 
import { StoreContext } from '../store/context'

export default function BottomNav(props) {

  const {activeNav, setActiveNav, scrollTopRef} = useContext(StoreContext)
  const {navigRef} = props
  const [update, setUpdate] = useState(0)

  const [navLinks, setNavLinks] = useState([
    {title:'Home',icon:"home"},
    {title:'Categories',icon:'antdesign'},
    {title:'Search',icon:'search1'},
    {title:'Saved',icon:'hearto', fa: true} 
  ])  
  const navlinksrow = navLinks?.map((link,i) => {
    return <TouchableOpacity 
      style={styles.navTab} 
      onPress={() => {
        navigRef.current.navigate(link.title)
        setUpdate(prev => prev+1)
        scrollTopRef?.current?.scrollTo({x:0, y:0})
      }}
      key={i}
    >
      {
        link.fa ? <FontAwesome name="bookmark-o" size={24} color={activeNav===link.title?"#fff":"rgba(255,255,255,0.6)"} /> :
        <AntDesign name={link.icon} size={24} color={activeNav===link.title?"#fff":"rgba(255,255,255,0.6)"} />
      }
      <Text style={[styles.navLinkText, {color:activeNav===link.title?"#fff":"rgba(255,255,255,0.6)"}]}>{link.title}</Text>
    </TouchableOpacity>
  })

  useEffect(() => {
    setActiveNav(navigRef.current.getCurrentRoute().name)
  },[update]) 

  return (
    <View style={styles.navContainer}>
      {navlinksrow}  
    </View>
  )
}

const styles = StyleSheet.create({
  navContainer: {
    bottom: 0,
    height: 70,
    width: '100%',
    backgroundColor: Colors.dark,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopColor: 'rgba(255,255,255,0.15)',
    borderTopWidth: 0.2
  },
  navTab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 15
  },
  navLinkText: {
    fontSize: 11,
    marginTop: 6
  }
}) 
