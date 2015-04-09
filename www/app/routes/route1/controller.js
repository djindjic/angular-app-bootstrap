import angular from 'angular';

export default
  angular
      .module('route1ControllerModule', [])
      .controller('Route1Controller', Route1Controller);

      Route1Controller.$inject = ['echoServiceResolve'];

  function Route1Controller(echoServiceResolve) {
    var vm = this;

    function _callEcho() {
      echoServiceResolve.echo('route 1').then(function(result) {
        vm.echo = result;
      });
    }

    _callEcho();

    angular.extend(vm, {
      callEcho: _callEcho,
    });
  }
