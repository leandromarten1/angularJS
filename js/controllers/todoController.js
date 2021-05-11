// angular
//   .module('ToDoList')
//   .controller('todoController', ($scope, todoFactory) => {
//     console.log($scope);
//     $scope.message = 'My app todo list';
//     $scope.todos = todoFactory.getTodos();
//     $scope.add = (todo) => {
//       todo.done = false;
//       todoFactory.addTodo(angular.copy(todo));
//       delete $scope.todo;
//     };

//     $scope.removeTodo = (todo) => {
//       $scope.todos = todoFactory.removeThisTodo(todo);
//     };

//     $scope.removeDone = (todos) => {
//       $scope.todos = todoFactory.removeAllTodosDone(todos);
//     };
//   });

(function () {
  'use strict';

  angular.module('ToDoList').controller('todoController', todoController);

  todoController.$inject = ['todoFactory'];

  function todoController(todoFactory) {
    var vm = this;

    vm.message = 'My app todo list';
    vm.todos = todoFactory.getTodos();
    vm.add = (todo) => {
      todo.done = false;
      todoFactory.addTodo(angular.copy(todo));
      delete vm.todo;
    };

    vm.removeTodo = (todo) => {
      vm.todos = todoFactory.removeThisTodo(todo);
    };

    vm.removeDone = (todos) => {
      vm.todos = todoFactory.removeAllTodosDone(todos);
    };
  }
})();
