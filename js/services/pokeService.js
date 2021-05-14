(function () {
  'use strict';

  angular.module('ToDoList').factory('pokeFactory', pokeFactory);

  const BASE_URL = 'https://pokeapi.co/api/v2';

  function pokeFactory($http, $q) {
    return {
      getPokemons: _getAllPokemons,
      getPokemonId: _getPokemonInfoById,
    };

    function _fetchApi() {
      return $http
        .get(`${BASE_URL}/pokemon?limit=151`)
        .then((response) => response.data.results)
        .catch((e) => $q.reject(e));
    }

    async function _getAllPokemons() {
      let result = await _fetchApi();
      const pokemons = result.map((pokemon, i) => {
        return {
          id: i + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            i + 1
          }.png`,
        };
      });
      return pokemons;
    }

    function _getPokemonInfoById(id) {
      const result = $http
        .get(`${BASE_URL}/pokemon/${id}`)
        .then((response) => response.data)
        .catch((e) => $q.reject(e));

      return result;
    }
  }
})();
