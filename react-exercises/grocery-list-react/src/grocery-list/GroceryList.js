import React, { Component } from "react";
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

    this.setState({ list: newlist });
    this.state.newGrocery = "";
  };

  clearAll = () => {
    this.setState(currentState => (currentState.list = []));
  };

  render() {
    return (
      <React.Fragment>
        <input value={this.state.newGrocery} onChange={this.updateNewGrocery} />
        <button onClick={this.addNewGrocery}>Add Grocery</button>
        <button onClick={this.clearAll}>Clear All</button>
        <ul>
          {this.state.list.map(item => (
            <GroceryListItem item={item} key={item.id} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default GroceryList;
