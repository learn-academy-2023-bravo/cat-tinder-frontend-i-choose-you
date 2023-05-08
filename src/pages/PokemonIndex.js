import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';

const PokemonIndex = ({pokemons}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === pokemons.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? pokemons.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = pokemons.map((pokemon, index) => {
    return (
      <CarouselItem className='pokemon_index'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <Card className='pokemon_cards'>
          <CardImg top src={pokemon.images} alt={pokemon.name} />
          <CardBody>
            <CardTitle>{pokemon.name}</CardTitle>
            <CardSubtitle>{`evolution stage: ${pokemon.evolution_stage}`}</CardSubtitle>
            <Button onClick={() => {window.location.href=`/pokemonshow/${pokemon.id}`}} className="btn btn-primary">
              I Choose You!
            </Button>
          </CardBody>
        </Card>
      </CarouselItem>
    );
  });
  

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      intereval={false}
    >
      <CarouselIndicators className='carousel_indicators'
        items={pokemons}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl className='carousel_control'
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl className='carousel_control'
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default PokemonIndex;
