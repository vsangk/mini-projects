import React from 'react';

const TodoItem = ({ id, text, isComplete }) => (
  <li>
    {text}
  </li>
);

export default TodoItem;
