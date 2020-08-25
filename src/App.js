import React, { Component } from 'react';
import './App.css';
import './components/Todos';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/header';
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
        completed: true
      },
      {
        id: 3,
        title: 'Do the dishes',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
  })
  }
  
  // delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)] });


  }


  render() 
  {
    console.log('todos in state: '+this.state.todos);

    return (
      <div className="App">
      <Header/>
      <AddTodo/>
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
