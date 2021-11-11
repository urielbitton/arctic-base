import React from 'react'
import { BottomSheet, ListItem } from "react-native-elements"

export default function BottomOptions(props) {

  const {list, isSheetVisible, setIsSheetVisible} = props

  const listRender = list?.map((lt, i) => (
    <ListItem key={i} containerStyle={lt.containerStyle} onPress={lt.onPress}>
      <ListItem.Content>
        <ListItem.Title style={lt.titleStyle}>{lt.title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  ))

  return (
    <BottomSheet
      isVisible={isSheetVisible}
      containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
    >
      {listRender}
    </BottomSheet>
  )
}

