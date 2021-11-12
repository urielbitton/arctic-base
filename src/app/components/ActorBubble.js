import React, { useEffect, useState } from 'react'
import { getActorById } from '../api/imdbAPI';
import InfoBubble from './InfoBubble';

export default function ActorBubble(props) {

  const {actor_id, character} = props.actor 
  const [actor, setActor] = useState({})

  useEffect(() => {
    getActorById(actor_id, setActor)
  },[actor_id])

  return (
    <InfoBubble 
      navigationLink="ActorScreen"
      personObject={actor?.results}
      personImgUrl={actor?.results?.image_url}
      title={actor?.results?.name}
      subtitle={character}
    />
  )
}
