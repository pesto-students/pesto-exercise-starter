import React from 'react';
export default function AddGrocery(props){

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }
  
  const handleChange = (event) => {
    let value = event.target.value;
    value = value.length === 1 ? value.toUpperCase() : value; 
    props.handleChange(value);
  }
  
  const handleClick = () => {
    const groceryName = props.inputText;
    if(!groceryName){
      return;
    }
    if(isGroceryExist(groceryName)){
      editGrocery(groceryName);
    }else{
      addGrocery(groceryName);
    }
  }

  const isGroceryExist = (groceryName) =>{
    return props.grocery.hasOwnProperty(groceryName)
  }

  const editGrocery = (groceryName) => {
    let groceryObject = props.grocery[groceryName];
    const count = parseInt(groceryObject.count) + 1;
    groceryObject.count = count;
    let existingGrocery = props.grocery;
    existingGrocery[groceryName] = groceryObject;
    props.updateGrocery(existingGrocery);
  }

  const addGrocery = (groceryName) => {
    let grocery = {
      count : 1,
      isChecked : false
    };
    let existingGrocery = props.grocery;
    existingGrocery[groceryName] = grocery;
    props.updateGrocery(existingGrocery);
  }

  return(
    <div className='form'>
      <span> Add New Grocery Item</span>
      <div>
        <input 
          type='text' 
          value={props.inputText} 
          placeholder='Enter name of grocery' 
          onKeyDown={_handleKeyDown}
          onChange={(e) => handleChange(e)} 
        />
        
        <input 
          type='button' 
          value='Add Grocery' 
          onClick={() => handleClick()} 
        />
      </div>
    </div>
  );
}

//export default AddGrocery;
