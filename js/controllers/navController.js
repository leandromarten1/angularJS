angular
  .module('ToDoList')
  .controller('navController', ($scope, todoFactory) => {
    $scope.todos = todoFactory.data.count;
    $scope.today = moment(todoFactory.data.timestamp).format('LL');
    $scope.getTotalTodos = function () {
      return $scope.todos.length;
    };
  });
