import React, { Component } from "react";
import "./GroceryList.css";
import GroceryListItem from "../grocery-list-item/GroceryListItem";

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newGrocery: ""
    };
  }

  updateNewGrocery = val => {
    let v = val.target.value;
    this.setState(currentState => (currentState.newGrocery = v));
  };

  addNewGrocery = () => {
    const newlist = [...this.state.list];
    let isItemFound = false;
    let index = 0;

    for (let item of newlist) {
      if (item.name.toLowerCase() === this.state.newGrocery.toLowerCase()) {
        newlist[index].quantity++;
        isItemFound = true;
      }
      index++;
    }

    if (!isItemFound) {
      const newItem = {
        name: this.state.newGrocery,
        price: 500 * Math.random(),
        id: this.state.list.length + 1,
        quantity: 1
      };
      newlist.push(newItem);
    }

    this.setState({ list: newlist, newGrocery: "" });
  };

  updateQuantity = (index, quantity) => {
    const groceryItemID = index;
    const newlist = [...this.state.list];
    newlist[groceryItemID].quantity += quantity;
    this.setState({ list: newlist });
  };

  clearAll = () => {
    this.setState(currentState => (currentState.list = []));
  };

  render() {
    let header;
    if (this.state.list.length > 0) {
      header = (
        <li className="List">
          <h3>Name</h3>
          <h3>Quantity</h3>
        </li>
      );
    }
    return (
      <React.Fragment>
        <div className="Main-Container">
          <div>
            <h1>Grocery List</h1>
          </div>
          <div className="Grocery-List">
            <input
              className="Grocery-Input"
              value={this.state.newGrocery}
              onChange={this.updateNewGrocery}
            />
            <button
              className={`${
                !this.state.newGrocery ? "Disable-Btn" : ""
              } Grocery-Btn`}
              onClick={this.addNewGrocery}
              disabled={!this.state.newGrocery}
            >
              Add Grocery
            </button>
            <button
              className={`${
                this.state.list.length === 0 ? "Disable-Btn" : ""
              } Grocery-Btn`}
              onClick={this.clearAll}
            >
              Clear All
            </button>
          </div>
          <ul>
            {header}
            {this.state.list.map(item => (
              <GroceryListItem
                item={item}
                key={item.id}
                updateQuantity={this.updateQuantity}
              />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default GroceryList;
