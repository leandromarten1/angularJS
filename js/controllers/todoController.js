angular
  .module('ToDoList')
  .controller('todoController', ($scope, todoFactory) => {
    $scope.message = 'My app todo list';
    $scope.todos = todoFactory.getTodos();
    $scope.add = (todo) => {
      todo.done = false;
      todoFactory.addTodo(angular.copy(todo));
      delete $scope.todo;
    };

    $scope.removeTodo = (todo) => {
      $scope.todos = todoFactory.removeThisTodo(todo);
    };

    $scope.removeDone = (todos) => {
      $scope.todos = todoFactory.removeAllTodosDone(todos);
    };
  });
