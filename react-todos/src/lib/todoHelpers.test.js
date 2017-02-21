import { addTodo } from './todoHelpers';

test('addTodo should add a new todo object to the todos array', () => {
  const startTodos = [
    { id: 1, text: 'First Todo', isComplete: false },
    { id: 2, text: 'Second Todo', isComplete: false },
    { id: 3, text: 'Third Todo', isComplete: false }
  ];

  const newTodo = { id: 4, text: 'Fourth Todo', isComplete: false };

  const expected = [
    { id: 1, text: 'First Todo', isComplete: false },
    { id: 2, text: 'Second Todo', isComplete: false },
    { id: 3, text: 'Third Todo', isComplete: false },
    { id: 4, text: 'Fourth Todo', isComplete: false }
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
