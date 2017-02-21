export const addTodo = (todoList, newTodo) => [...todoList, newTodo];

export const generateId = () => Math.floor(Math.random() * 1000);
