import React, { useEffect, useState } from 'react'
import { getActorIdByName, getActorById } from '../api/imdbAPI'
import InfoBubble from './InfoBubble'
import profilePic from '../assets/imgs/profile.png'

export default function CrewBubble(props) {

  const {crew, subtitle} = props
  const [crewId, setCrewId] = useState('')
  const [crewInfo, setCrewInfo] = useState({})

  useEffect(() => {
    getActorIdByName(crew, setCrewId)
  },[crew])
  
  useEffect(() => {
    getActorById(crewId, setCrewInfo)
  },[crewId])
  console.log(crewInfo)

  return (
    <InfoBubble 
      navigationLink="ActorScreen"
      personObject={crewInfo?.results}
      personImgUrl={crewInfo?.results?.image_url??'https://i.imgur.com/bcdjuvO.png'}
      title={crew}
      subtitle={subtitle}
    />
  )
}
