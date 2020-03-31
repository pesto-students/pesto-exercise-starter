import React from "react";
import "./GroceryListItem.css";

const GroceryListItem = props => {
  return (
    <li className="List">
      <span className="Grocery-Name">{props.item.name}</span>
      <div>
        <span className="Quantity-Negative">
          <button
            onClick={() => props.updateQuantity(props.item.id - 1, -1)}
            disabled={props.item.quantity === 1}
          >-</button>
        </span>
        <span>{props.item.quantity}</span>
        <span className="Quantity-Positive">
          <button onClick={() => props.updateQuantity(props.item.id - 1, 1)}>+</button>
        </span>
      </div>
    </li>
  );
};

export default GroceryListItem;
