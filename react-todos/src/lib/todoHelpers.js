export const addTodo = (todoList, newTodo) => [newTodo, ...todoList];

export const generateId = () => Math.floor(Math.random() * 1000);

export const toggleTodo = (todoList, id) => {
  return todoList.map(todo => {
    if (todo.id === id) {
      return Object.assign({}, todo, { isComplete: !todo.isComplete });
    }

    return todo;
  });
};

export const removeTodo = (todoList, id) => {
  const removeIndex = todoList.findIndex(todo => todo.id === id);

  return [
    ...todoList.slice(0, removeIndex),
    ...todoList.slice(removeIndex + 1)
  ];
}

export const filterTodos = (todoList, filter) => {
  if (filter === '/completed') {
    return todoList.filter(todo => todo.isComplete);
  } else {
    return todoList.filter(todo => !todo.isComplete);
  }
}
