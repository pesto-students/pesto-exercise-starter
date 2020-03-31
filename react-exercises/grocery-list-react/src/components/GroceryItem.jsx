import React from 'react';

const GroceryItem = ({ item, handleClick }) => {
  const redText = {
    color: 'red'
  };
  const blackText = {
    color: 'black'
  };
  return (
    <p onClick={() => handleClick(item)} style={item.clicked > 0 ? redText : blackText}>
      {item.name}
    </p>
  );
};

export default GroceryItem;
