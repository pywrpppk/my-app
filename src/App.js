import React, { Component } from 'react';
//import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
//import { from } from 'webpack-sources/lib/CompatSource';

import './App.css';
import { cloneNode } from '@babel/types';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange=(e)=> {
    this.setState({ searchField: e.target.value });
  } 

  render() {
    const { monsters, searchField } = this.state;
    //const monsters = this.state.monsters;
    //const searchField = this.searchField;
    const filteredMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    )


    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
          {
            this.state.monsters.map(monsters => (
              <h1 key={monsters.id}>{monsters.name}</h1>
            ))}
        </CardList>
      </div>
    )
  }
}

export default App;




//Where to put state here?
//where they care about that statement.