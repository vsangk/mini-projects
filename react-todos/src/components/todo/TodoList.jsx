import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, handleToggle, handleRemove}) => (
  <div className="todo-list">
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
          {...todo} />
      ))}
    </ul>
  </div>
)

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
}
