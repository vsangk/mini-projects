import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              handleToggle={this.props.handleToggle}
              handleRemove={this.props.handleRemove}
              {...todo} />
          ))}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
}

export default TodoList;
