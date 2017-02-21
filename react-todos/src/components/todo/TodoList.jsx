import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, handleToggle, handleRemove}) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
        {...todo} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
}
