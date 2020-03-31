import React from 'react';
import GroceryList from './components/GroceryList';

function App() {
  const [groceryItems, setGroceryItems] = React.useState([]);
  const [inputBoxValue, setInputBoxValue] = React.useState('');

  const addGroceryItem = e => {
    e.preventDefault();
    if (!inputBoxValue) return;
    const newGroceryItems = [
      ...groceryItems,
      { name: inputBoxValue, clicked: 0, id: groceryItems.length }
    ];
    setGroceryItems(newGroceryItems);
    setInputBoxValue('');
  };

  const handleGroceryItemClick = groceryItem => {
    const newGroceryItems = [...groceryItems];
    newGroceryItems[groceryItem.id].clicked += 1;
    setGroceryItems(newGroceryItems);
    console.log(groceryItems);
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
