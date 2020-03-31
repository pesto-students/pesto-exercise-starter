import React from 'react';
import GroceryList from './components/GroceryList';

function App() {
  const [groceryItems, setGroceryItems] = React.useState([]);
  const [inputBoxValue, setInputBoxValue] = React.useState('');

  const addGroceryItem = e => {
    console.log(e);
    e.preventDefault();
    if (!inputBoxValue) return;
    const newGroceryItems = [...groceryItems, { name: inputBoxValue }];
    setGroceryItems(newGroceryItems);
    setInputBoxValue('');
  };

  return (
    <div className="App">
      <form onSubmit={addGroceryItem}>
        <input
          type="text"
          value={inputBoxValue}
          onChange={e => setInputBoxValue(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <GroceryList items={groceryItems}></GroceryList>
    </div>
  );
}

export default App;
