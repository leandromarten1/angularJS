angular
  .module('ToDoList', [])
  .controller('navController', ($scope, todoFactory) => {
    $scope.date = new Date();
    $scope.unfinished = todoFactory.getTodos();
  });
