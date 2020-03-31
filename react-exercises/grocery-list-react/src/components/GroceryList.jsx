import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({ items, handleClick }) => {
  return (
    <React.Fragment>
      {items.map(item => (
        <GroceryItem item={item} key={item.id} handleClick={handleClick}></GroceryItem>
      ))}
    </React.Fragment>
  );
};

export default GroceryList;
