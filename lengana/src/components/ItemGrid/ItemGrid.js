import React from 'react';
import { GridContainer } from './styles';
import ItemCard from './ItemCard';
import { items } from '../../data/items';

const ItemGrid = () => {
  return (
    <GridContainer>
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </GridContainer>
  );
};

export default ItemGrid;

