import React from 'react';

const GroceryItem = ({ item, handleClick }) => {
  const redText = {
    color: 'red'
  };
  const blackText = {
    color: 'black'
  };
  return (
    <p onClick={() => handleClick(item.id)} style={item.clicked > 0 ? redText : blackText}>
      {item.name} <span>{item.quantity}</span>
    </p>
  );
};

export default GroceryItem;
