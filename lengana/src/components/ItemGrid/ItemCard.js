import React, { useState } from 'react';
import { CardContainer, CardFront, CardBack, PriceTag, Image } from './styles';

const ItemCard = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <CardContainer onClick={() => setIsFlipped(!isFlipped)}>
      <CardFront isFlipped={isFlipped}>
        <Image src={item.image} alt={item.name} />
        <PriceTag>R {item.price.toLocaleString()}</PriceTag>
      </CardFront>
      <CardBack isFlipped={isFlipped}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </CardBack>
    </CardContainer>
  );
};

export default ItemCard;
