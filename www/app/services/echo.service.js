import angular from 'angular';

export default
  angular
      .module('echoServiceModule', [])
      .factory('echoService', echoService);

  echoService.$inject = ['$q'];

  function echoService($q) {
    var service = {
      echo: _echo,
    };

    return service;

    function _echo(text) {
      var deferred = $q.defer();

      deferred.resolve(text);

      return deferred.promise;
    }
  }
