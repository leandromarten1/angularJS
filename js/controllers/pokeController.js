(function () {
  'use strict';

  angular.module('ToDoList').controller('pokeController', pokeController);

  pokeController.$inject = ['pokemons'];

  function pokeController(pokemons) {
    var vm = this;

    vm.pokemons = pokemons;
  }
})();
