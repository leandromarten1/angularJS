(function () {
  'use strict';

  angular.module('ToDoList').config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        url: '',
        views: {
          '@': {
            template: '<h1>Meu App in AngularJS</h1>',
          },
          header: {
            templateUrl: 'view/header.html',
            controller: 'navController as nav',
          },
        },
      })
      .state('app.todo', {
        url: '/todo',
        views: {
          '@': {
            templateUrl: 'view/todo.html',
            controller: 'todoController as vm',
          },
        },
      })
      .state('app.about', {
        url: '/about',
        views: {
          '@': {
            templateUrl: 'view/about.html',
          },
        },
      })
      .state('app.pokemon', {
        url: '/pokemon',
        views: {
          '@': {
            templateUrl: 'view/pokemon.html',
            controller: 'pokeController as vm',
          },
        },
        resolve: {
          pokemons: function (pokeFactory) {
            return pokeFactory.getPokemons();
          },
        },
      })
      .state('app.pokemon.detail', {
        url: '/pokemon/detail/:pokeId',
        views: {
          '@': {
            templateUrl: 'view/pokeDetail.html',
            controller: 'detailsController as vm',
          },
        },
        resolve: {
          pokemon: function (pokeFactory, $stateParams) {
            return pokeFactory.getPokemonId($stateParams.pokeId);
          },
        },
      });
  });
})();
