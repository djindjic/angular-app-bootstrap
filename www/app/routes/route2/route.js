import angular from 'angular';
import 'angular-ui-router';
import baseRouteModule from 'app/routes/base.route';
import controllerModule from './controller';
import template from './template.html!text';

export default
  angular
      .module('route2RouteModule', [
        'ui.router',
        baseRouteModule.name,
        controllerModule.name,
      ]).
      config(['$stateProvider',
        function route2Route($stateProvider) {
          $stateProvider.state('base.route2', {
            url: '/route2',
            template: template,
            controller: 'Route2Controller',
            controllerAs: 'vm',
          });
        },
      ]);
