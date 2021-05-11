angular.module('ToDoList', ['ui.router']);

angular.module('ToDoList').config(function ($stateProvider) {
  let helloState = {
    name: 'app',
    url: '/',
    templateUrl: 'view/todo.html',
  };

  let aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'view/about.html',
  };

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});
