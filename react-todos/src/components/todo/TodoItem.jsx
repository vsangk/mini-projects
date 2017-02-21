import React from 'react';

export const TodoItem = ({ id, text, isComplete, handleToggle, handleRemove }) => (
  <li className="todo-item">
    <input
      type="checkbox"
      onChange={handleToggle.bind(null, id)}
      checked={isComplete} />
    {text}
    <span onClick={handleRemove.bind(null, id)} className="delete">X</span>
  </li>
);

TodoItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool
}
