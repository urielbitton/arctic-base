import React from 'react';
import PageSlider from '@pietile-native-kit/page-slider';
import SlideCard from './SlideCard';
import SlideCardCustom from './SlideCardCustom'

export default function Slider(props) {
  
  const {moviesSlide, selectedPage=0, width='100%', height, peek=65, pageMargin=15, 
    mode="card", cardWidth, imgOnly, customCard} = props

  const slideRender = moviesSlide?.map(film => {
    return (
      customCard ? 
      <SlideCardCustom film={film} cardWidth={cardWidth} imgOnly={imgOnly} key={film.imdbID} /> :
      <SlideCard film={film} cardWidth={cardWidth} imgOnly={imgOnly} key={film.imdb_id} /> 
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