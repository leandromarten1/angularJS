angular.module('ToDoList').factory('todoFactory', () => {
  let todos = [];

  const _getTodos = () => {
    return todos;
  };

  const _addTodo = (todo) => {
    _getTodos().push(todo);
  };

  const _removeThisTodo = (todo) => {
    todos = _getTodos().filter((e) => e !== todo);
    return todos;
  };

  const _removeAllTodosDone = (dones) => {
    todos = dones.filter((todo) => !todo.selected);
    return todos;
  };

  return {
    getTodos: _getTodos,
    addTodo: _addTodo,
    removeThisTodo: _removeThisTodo,
    removeAllTodosDone: _removeAllTodosDone,
  };
});
