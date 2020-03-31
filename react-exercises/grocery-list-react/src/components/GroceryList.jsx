import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({ items }) => {
  return (
    <React.Fragment>
      {items.map(item => (
        <GroceryItem item={item} key={item.id}></GroceryItem>
      ))}
    </React.Fragment>
  );
};

export default GroceryList;
