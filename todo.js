let app = angular.module('ToDoList', []);

// Evitar LER o $scpe dentro do controller

app.controller('todoController', ($scope) => {
  $scope.message = 'My app todo list';
  $scope.todos = [];
  $scope.add = (todo) => {
    // usado o copy para não manter a referencia do objeto todo
    $scope.todos.push(angular.copy(todo));
    // deleta a referencia depois (limpa o campo input)
    delete $scope.todo;
  };

  $scope.removeTodo = (todo) => {
    $scope.todos = $scope.todos.filter((e) => e !== todo);
  };

  $scope.removeDone = (todos) => {
    $scope.todos = todos.filter((todo) => !todo.selected);
  };
});
