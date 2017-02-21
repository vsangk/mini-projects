import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { addTodo, generateId } from './lib/todoHelpers.js';

class App extends Component {
  state = {
    todos: [
      { id: 1, text: 'First Todo', isComplete: false },
      { id: 2, text: 'Second Todo', isComplete: false },
      { id: 3, text: 'Third Todo', isComplete: false }
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
    this.setState({ currentTodo: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <TodoForm
          currentTodo={this.state.currentTodo}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
