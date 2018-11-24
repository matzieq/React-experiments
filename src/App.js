import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Maciek", age: 36},
      { name: "Zenek", age: 54}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>To działaa!</h1>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My hobbies: none</Person>
        
      </div>
    );
  }
}

export default App;
