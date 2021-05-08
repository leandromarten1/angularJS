angular
  .module('ToDoList', [])
  .controller('todoController', ($scope, todoFactory) => {
    $scope.message = 'My app todo list';
    $scope.todos = todoFactory.getTodos();
    $scope.add = (todo) => {
      // usado o copy para não manter a referencia do objeto todo
      //   $scope.todos.push(angular.copy(todo));
      todoFactory.addTodo(angular.copy(todo));
      // deleta a referencia depois (limpa o campo input)
      delete $scope.todo;
    };

    $scope.removeTodo = (todo) => {
      $scope.todos = todoFactory.removeThisTodo(todo);
    };

    $scope.removeDone = (todos) => {
      $scope.todos = todoFactory.removeAllTodosDone(todos);
    };
  });
