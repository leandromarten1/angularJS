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

  todoController.$inject = ['$scope', 'todoFactory'];

  function todoController($scope, todoFactory) {
    // function todoController(todoFactory, todoList) {
    // injetar todoList como dependĂȘncia
    var vm = this;

    vm.todos = todoFactory.getTodos();
    vm.add = add;
    vm.removeTodo = removeTodo;
    vm.removeDone = removeDone;

    function add(todo) {
      todo.done = false;
      todoFactory.addTodo(angular.copy(todo));
      delete $scope.todo;
    }

    function removeTodo(todo) {
      vm.todos = todoFactory.removeThisTodo(todo);
    }

    function removeDone(todos) {
      vm.todos = todoFactory.removeAllTodosDone(todos);
    }
  }
})();
