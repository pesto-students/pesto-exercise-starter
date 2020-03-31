import React from 'react';
import GroceryList from './components/GroceryList';

function App() {
  const [groceryItems, setGroceryItems] = React.useState([]);
  const [inputBoxValue, setInputBoxValue] = React.useState('');

  const groceryItemExists = newGroceryItem => {
    return groceryItems.findIndex(groceryItem => groceryItem.name === newGroceryItem) > -1;
  };

  const addGroceryItem = e => {
    e.preventDefault();
    if (!inputBoxValue) return;
    const newGroceryItem = inputBoxValue;
    let newGroceryItems = [];
    if (groceryItemExists(inputBoxValue)) {
      const duplicateGroceryItemIndex = groceryItems.findIndex(
        groceryItem => groceryItem.name === newGroceryItem
      );
      newGroceryItems = [...groceryItems];
      newGroceryItems[duplicateGroceryItemIndex].quantity += 1;
    } else {
      newGroceryItems = [
        ...groceryItems,
        { name: inputBoxValue, clicked: 0, id: groceryItems.length, quantity: 1 }
      ];
    }
    setGroceryItems(newGroceryItems);
    setInputBoxValue('');
  };

  const handleGroceryItemClick = groceryItemId => {
    const newGroceryItems = [...groceryItems];
    newGroceryItems[groceryItemId].clicked += 1;
    setGroceryItems(newGroceryItems);
  };

  return (
    <div className="App">
      <form onSubmit={addGroceryItem}>
        <input
          type="text"
          value={inputBoxValue}
          onChange={e => setInputBoxValue(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
      <GroceryList items={groceryItems} handleClick={handleGroceryItemClick}></GroceryList>
    </div>
  );
}

export default App;
