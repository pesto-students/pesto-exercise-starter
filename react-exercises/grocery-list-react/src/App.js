import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddGrocery from './components/AddGrocery';
import ListGrocery from './components/ListGrocery';

class App extends React.Component {

  state = {
    'inputText': '',
    'grocery' : {}
  }

  textChangeListener = (value) => {
    this.setState({
      inputText: value
    })
  }

  updateGrocery = (grocery) => {
    this.setState({
      grocery,
      inputText : ''
    })
  }
  render() {
    return (
      <>
        <AddGrocery 
          inputText={this.state.inputText}
          handleChange={this.textChangeListener}
          grocery = {this.state.grocery}
          updateGrocery = {this.updateGrocery}>
        </AddGrocery>
        <ListGrocery
          grocery = {this.state.grocery}
          updateGrocery = {this.updateGrocery}>
        </ListGrocery>
      </>
    );
  }
}

export default App;
