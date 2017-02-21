import React from 'react';

const TodoForm = ({ handleInputChange, handleSubmit, currentTodo }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text"
        onChange={handleInputChange}
        value={currentTodo} />
    </form>
  </div>
);

export default TodoForm;
