import angular from 'angular';

export default
  angular
      .module('route2ControllerModule', [])
      .controller('Route2Controller', Route2Controller);

      Route2Controller.$inject = ['echoServiceResolve'];

  function Route2Controller(echoServiceResolve) {
    var vm = this;

    function _callEcho() {
      echoServiceResolve.echo('route 2').then(function(result) {
        vm.echo = result;
      });
    }

    _callEcho();

    angular.extend(vm, {
      callEcho: _callEcho,
    });
  }
