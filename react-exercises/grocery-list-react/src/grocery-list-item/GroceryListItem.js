import React from "react";
import "./GroceryListItem.css";

const GroceryListItem = props => {
  return (
    <li className="List">
      <span>{props.item.name}</span>
      <span>{props.item.quantity}</span>
      <button>Add</button>
    </li>
  );
};

export default GroceryListItem;
