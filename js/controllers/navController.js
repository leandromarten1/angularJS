(function () {
  'use strict';

  angular.module('ToDoList').controller('navController', navController);

  navController.$inject = ['todoFactory'];

  function navController(todoFactory) {
    var vm = this;

    vm.todos = todoFactory.data.count;
    vm.today = moment(todoFactory.data.timestamp).format('LL');
    vm.getTotalTodos = getTotalTodos;

    function getTotalTodos() {
      return vm.todos.length;
    }
  }
})();
