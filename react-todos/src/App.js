import React, { Component } from 'react';
import './App.css';
import { TodoList, TodoForm, FilterLinks } from './components/todo';
import { addTodo, generateId, toggleTodo, removeTodo, filterTodos } from './lib/todoHelpers.js';

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

  handleError = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Input can\'t be blank'
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
    const visibleTodos = filterTodos(this.state.todos, this.props.route.path);
    const handleSubmit = this.state.currentTodo === '' ?
      this.handleError : this.handleSubmit;

    return (
      <div className="app">
        <FilterLinks />
        <TodoForm
          currentTodo={this.state.currentTodo}
          handleInputChange={this.handleInputChange}
          handleSubmit={handleSubmit} />
        <TodoList
          todos={visibleTodos}
          handleToggle={this.handleToggle}
          handleRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;
