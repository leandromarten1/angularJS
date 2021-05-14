(function () {
  'use strict';

  angular.module('ToDoList').filter('capitalize', capitalize);

  function capitalize() {
    return function (input) {
      let format =
        input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
      return format;
    };
  }
})();
