import React from 'react';

export const TodoForm = (props) => {
  const style = location.pathname === '/completed' ? { display: 'none' } : {};

  return (
    <form onSubmit={props.handleSubmit} className="todo-form">
      <input type="text"
        style={style}
        placeholder="Add a todo"
        onChange={props.handleInputChange}
        value={props.currentTodo} />
    </form>
  );
};

TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleInputChange: React.PropTypes.func.isRequired
}
