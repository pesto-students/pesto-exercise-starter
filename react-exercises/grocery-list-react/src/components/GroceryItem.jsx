import React from 'react';

const GroceryItem = ({ item, handleClick }) => (
  <p onClick={() => handleClick({ item })}>{item.name}</p>
);

export default GroceryItem;
