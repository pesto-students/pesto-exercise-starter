import React from 'react';

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
      {groceryItems.map(groceryItem => (
        <p>{groceryItem.name}</p>
      ))}
    </div>
  );
}

export default App;
