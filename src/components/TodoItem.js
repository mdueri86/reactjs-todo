import React, {Component } from 'react'
import PropTypes from 'prop-types';
import Todos from './Todos';

export class TodoItem extends Component {
    getStyle = () => {
        console.log(this.props.todo.completed);

        if (this.props.todo.completed) {
            return {
                textDecoration: 'line-through',
                background: '#a4a4a4',
                color: 'green',
                padding: '10px',
                borderBottom: '1px #ccc dotted'
            }
        }
        else return {
                textdecoration: 'none',
                background: '#f4f4f4',
                color: 'black',
                padding: '10px',
                borderBottom: '1px #ccc dotted'
        }
    }
    
   

    render() {
        const {id,title} = this.props.todo; // destructuring to let you just say id or title instead of this.props.todo.id etc...

        return (
        // inline styling uses double curly braces.
        // identical to css but no hyphens
        <div style={this.getStyle()}>
            <p>
                <input type='checkbox' onChange={this.props.markComplete.bind 
                (this,id)}/>{' '}
                {this.props.todo.title}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
            </p>
        </div>

        )
    }
}

function getStyle()
{

}

// proptypes - validation for the types of properties an object should have
TodoItem.propTypes = { 
    todo: PropTypes.object.isRequired // we have a prop called todo that is required.
  }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem