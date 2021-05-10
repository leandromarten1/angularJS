angular.module('ToDoList').factory('todoFactory', () => {
  let todos = [];

  return {
    getTodos: _getTodos,
    data: { count: todos, timestamp: new Date() },
    addTodo: _addTodo,
    removeThisTodo: _removeThisTodo,
    removeAllTodosDone: _removeAllTodosDone,
  };

  function _getTodos() {
    return todos;
  }

  function _addTodo(todo) {
    todo.done = false;
    todos.push(todo);
  }

  function _removeThisTodo(todo) {
    todos.splice(todos.indexOf(todo), 1);
    return todos;
  }

  function _removeAllTodosDone() {
    for (let i = 0; i <= todos.length; i += 1) {
      if (todos[i].done) {
        todos.splice(i, 1);
      }
    }
    return todos;
  }
});
