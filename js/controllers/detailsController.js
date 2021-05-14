(function () {
  'use strict';

  angular.module('ToDoList').controller('detailsController', detailsController);

  detailsController.$inject = ['$stateParams', 'pokemon'];

  function detailsController($stateParams, pokemon) {
    var vm = this;

    vm.id = $stateParams.pokeId;
    vm.pokemon = getInfoPokemon(pokemon);

    function getInfoPokemon(pokemon) {
      return {
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        weight: pokemon.weight,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
      };
    }
  }
})();
