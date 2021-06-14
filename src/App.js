import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

 //pass in key when you have a list of elements in react...The best way 

// const num = ["who", "what", "where", "why"];

// const newNum = num.map( (name,index) => {

//   return  name+" "+index;
// }
   
// )
// console.log(newNum);
//map is like replacing original list with a new list..very tricky but important
//store.all(animal)
//****practie enumerabals map.
//the word next to the map is the one being replaced
// *** to really understand how data is being moved throughout the code console.log(props) is the key to understanding
//work on rendering a list of data to a page