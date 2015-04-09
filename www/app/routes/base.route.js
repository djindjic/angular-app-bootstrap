import angular from 'angular';
import 'angular-ui-router';
import echoServiceModule from 'app/services/echo.service';

export default
  angular
      .module('baseRouteModule', [
        'ui.router',
        echoServiceModule.name,
      ])
      .config([
        '$stateProvider',
        function baseRoute($stateProvider) {
          $stateProvider.state('base', {
            abstract: true,
            url: '',
            views: {
              '': {
                template: '<ui-view/>',
              },
            },
            resolve: {
              echoServiceResolve: [
                'echoService',
                function echoServiceResolver(echoService) {
                  return echoService;
                },
              ],
            },
          });
        },
      ]);
