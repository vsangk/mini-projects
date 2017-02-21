import { addTodo, toggleTodo, removeTodo } from './todoHelpers';

test('addTodo should add a new todo object to the todos array', () => {
  const startTodos = [
    { id: 3, text: 'Third Todo', isComplete: false },
    { id: 2, text: 'Second Todo', isComplete: false },
    { id: 1, text: 'First Todo', isComplete: false }
  ];

  const newTodo = { id: 4, text: 'Fourth Todo', isComplete: false };

  const expected = [
    { id: 4, text: 'Fourth Todo', isComplete: false },
    { id: 3, text: 'Third Todo', isComplete: false },
    { id: 2, text: 'Second Todo', isComplete: false },
    { id: 1, text: 'First Todo', isComplete: false }
  ];

  const result = addTodo(startTodos, newTodo);

  expect(result).toEqual(expected);
});

test('addTodo should not mutate the original todos array', () => {
  const startTodos = [
    { id: 1, text: 'First Todo', isComplete: false },
    { id: 2, text: 'Second Todo', isComplete: false },
    { id: 3, text: 'Third Todo', isComplete: false }
  ];

  const newTodo = { id: 4, text: 'Fourth Todo', isComplete: false };

  const result = addTodo(startTodos, newTodo);

  expect(result).not.toBe(startTodos);
});

test('toggleTodo should toggle the isComplete property of a todo by id', () => {
  const startTodos = [
    { id: 1, text: 'First Todo', isComplete: false },
    { id: 2, text: 'Second Todo', isComplete: false },
    { id: 3, text: 'Third Todo', isComplete: false }
  ];

  const expected = [
    { id: 1, text: 'First Todo', isComplete: false },
    { id: 2, text: 'Second Todo', isComplete: false },
    { id: 3, text: 'Third Todo', isComplete: true }
  ];

  const result = toggleTodo(startTodos, 3);

  expect(result).toEqual(expected);
});

test('toggleTodo should not mutate the original todos array', () => {
  const startTodos = [
    { id: 1, text: 'First Todo', isComplete: false },
    { id: 2, text: 'Second Todo', isComplete: false },
    { id: 3, text: 'Third Todo', isComplete: false }
  ];

  const result = toggleTodo(startTodos, 2);

  expect(result).not.toBe(startTodos);
});

test('removeTodo should remove the todo by id', () => {
  const startTodos = [
    { id: 1, text: 'First Todo', isComplete: false },
    { id: 2, text: 'Second Todo', isComplete: false },
    { id: 3, text: 'Third Todo', isComplete: false }
  ];

  const expected = [
    { id: 1, text: 'First Todo', isComplete: false },
    { id: 3, text: 'Third Todo', isComplete: false }
  ];

  const result = removeTodo(startTodos, 2);

  expect(result).toEqual(expected);
})

test('removeTodo should not mutate the original array', () => {
  const startTodos = [
    { id: 1, text: 'First Todo', isComplete: false },
    { id: 2, text: 'Second Todo', isComplete: false },
    { id: 3, text: 'Third Todo', isComplete: false }
  ];

  const result = removeTodo(startTodos, 2);

  expect(result).not.toBe(startTodos);
})
