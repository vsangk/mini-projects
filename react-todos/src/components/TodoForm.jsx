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

TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleInputChange: React.PropTypes.func.isRequired
}

export default TodoForm;
