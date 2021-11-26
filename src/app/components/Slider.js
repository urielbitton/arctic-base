import React from 'react';
import PageSlider from '@pietile-native-kit/page-slider';
import SlideCard from './SlideCard';
import SlideCardCustom from './SlideCardCustom'
import SearchBox from './SearchBox';
import ActorCard from './ActorCard';

export default function Slider(props) {
  
  const {slide, selectedPage=0, width='100%', height, peek=65, pageMargin=15, 
    mode="card", cardWidth, cardHeight, imgOnly, customCard, searchCard, coverImg, 
    actorCard} = props

  const slideRender = slide?.map(el => {
    return (
      searchCard ?
        <SearchBox coverImg={coverImg} genre={el.genre} year={el} key={el.genre}/> :
      customCard ? 
        <SlideCardCustom film={el} cardWidth={cardWidth} imgOnly={imgOnly} key={el.imdbID} /> :
      actorCard ?
        <ActorCard actor={el} cardWidth={cardWidth} cardHeight={cardHeight} key={el.imdb_id}/> :
        <SlideCard film={el} cardWidth={cardWidth} imgOnly={imgOnly} key={el.imdb_id} /> 
    )
  })

  return (
    <PageSlider
      style={{width, height}}
      mode={mode}
      peek={peek}
      pageMargin={pageMargin}
      selectedPage={selectedPage}
      onSelectedPageChange={() => console.log('')} 
      onCurrentPageChange={() => console.log('')}
    >
      {slideRender}
    </PageSlider>
  );
}