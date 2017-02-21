import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { addTodo, generateId, toggleTodo, removeTodo } from './lib/todoHelpers.js';

class App extends Component {
  state = {
    todos: [
      { id: 3, text: 'Third Todo', isComplete: false },
      { id: 2, text: 'Second Todo', isComplete: false },
      { id: 1, text: 'First Todo', isComplete: true }
    ],
    currentTodo: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const currentTodo = {
      id: generateId(),
      text: this.state.currentTodo,
      isComplete: false
    }
    this.setState({
      todos: addTodo(this.state.todos, currentTodo),
      currentTodo: ''
    });
  }

  handleInputChange = (e) => {
    this.setState({ currentTodo: e.target.value });
  }

  handleToggle = (id) => {
    const updatedTodos = toggleTodo(this.state.todos, id);
    this.setState({ todos: updatedTodos });
  }

  handleRemove = (id) => {
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div className="App">
        <TodoForm
          currentTodo={this.state.currentTodo}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit} />
        <TodoList
          todos={this.state.todos}
          handleToggle={this.handleToggle}
          handleRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;
