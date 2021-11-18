import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function BackBar(props) {

  const {barPosition='relative', secondIcon, barStyles, backIconColor='#fff', backIconSize=20} = props
  const navigation = useNavigation()

  return (
    <View style={[styles.backBar, barStyles, {position: barPosition}]}>
      <Fontisto 
      name="angle-left" 
      style={styles.backIcon}
      onPress={(e) => {e.stopPropagation();navigation.goBack()}} 
      color={backIconColor}
      size={backIconSize}
    />
    {secondIcon}
    </View>
  )
}

const styles = StyleSheet.create({
  backBar: {
    top: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 100
  }
})