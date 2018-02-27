import React, { Component } from 'react';
import './App.css';
import Persons from "./Persons/Persons";

class App extends Component {


    constructor(props) {
        console.log('constructor method');
        super(props);
        this.state = {
            persons: [
                {id:1, name: 'James Bond', age: '32'},
                {id:2, name: 'James Hunt', age: '29'},
                {id:3, name: 'Ethan Hunt', age: '21'}
            ],
            toggleElements: true
        }
    }

    togglePersons = () => {
        const toggleValue = this.state.toggleElements;
        this.setState({toggleElements : !toggleValue})
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {
            ... this.state.persons[personIndex]
        }
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    }


    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];

        persons.splice(index, 1);
        this.setState({persons: persons});
    }

    componentWillMount() {
        console.log('componentWillMount method');
    }

    componentDidMount() {
        console.log('componentDidMount method');
    }

  render() {
        console.log('render method');
        let persons = null;
        if(this.state.toggleElements) {
            persons = (
                <Persons persons = {this.state.persons} changeName = {this.nameChangeHandler} click={this.deletePersonHandler}/>
            );
        }

    return (
      <div className="App">
        <h1>{this.props.title}</h1>
          <button onClick={this.togglePersons}>Toggle Persons</button>
          { persons }
      </div>
    );
  }
}

export default App;
