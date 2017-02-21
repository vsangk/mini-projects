import React from 'react';

const TodoItem = ({ id, text, isComplete, handleToggle, handleRemove }) => (
  <li>
    <input
      type="checkbox"
      onChange={handleToggle.bind(null, id)}
      checked={isComplete} />
    {text}
    <span onClick={handleRemove.bind(null, id)}>X</span>
  </li>
);

TodoItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool
}

export default TodoItem;
