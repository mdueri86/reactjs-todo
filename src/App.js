import React, { Component } from 'react';
import './App.css';
import './components/Todos';
import Todos from './components/Todos';
import { render } from '@testing-library/react';


class App extends Component{

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Mow the lawn',
        completed: false
      },
      {
        id: 3,
        title: 'Do the dishes',
        completed: false
      }
    ]
  }

  
  render() 
  {
    console.log('todos in state: '+this.state.todos);

    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
