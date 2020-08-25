import React, { Component } from 'react';
import { render } from '@testing-library/react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component{  
 

    render() {
      return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete = {this.props.markComplete} delTodo={this.props.delTodo} />
      ));          
    }
}

// proptypes - validation for the types of properties an object should have
Todos.propTypes = { 
  todos: PropTypes.array.isRequired // we have a prop called todos which must be defined.
}

export default Todos;
