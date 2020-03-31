import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({ items }) => {
  console.log(items);
  return (
    <React.Fragment>
      {items.map(item => (
        <GroceryItem item={item} key={item.name}></GroceryItem>
      ))}
    </React.Fragment>
  );
};

export default GroceryList;
