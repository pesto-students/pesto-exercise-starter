import React from 'react';
export default function ListGrocery(props){
  
  const removeItem = (groceryName) => {
    let existingItem = props.grocery;
    delete existingItem[groceryName];
    props.updateGrocery(existingItem);
  }

  const onItemClick = (groceryName) => {
    let groceryObject = props.grocery[groceryName];
    const isChecked = groceryObject.isChecked
    groceryObject.isChecked = isChecked ? false : true;
    let existingGrocery = props.grocery;
    existingGrocery[groceryName] = groceryObject;
    props.updateGrocery(existingGrocery);
  }
  
  const renderList = (props) => {
    let items = [];
    if(!props.grocery){
      return;
    }
    for(const [key, value] of Object.entries(props.grocery)){
      items.push(
        <div className="column" key={key}>
          <div className='card'>
            <span onClick={() => removeItem(key)}>X</span>
            <h1 className={value.isChecked ? 'select' : 'unselect' } onClick={() => onItemClick(key)}>{key}</h1>
            <p>({value.count})</p>
          </div>
        </div>);
    }
    return items;
  }

  return(
    <div className="row">
      {renderList(props)}
    </div>
  );
}

//export default AddGrocery;
