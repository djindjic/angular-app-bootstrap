import angular from 'angular';
import 'angular-ui-router';
import baseRouteModule from 'app/routes/base.route';
import controllerModule from './controller';
import template from './template.html!text';

export default
  angular
      .module('route1RouteModule', [
        'ui.router',
        baseRouteModule.name,
        controllerModule.name,
      ]).
      config(['$stateProvider',
        function route1Route($stateProvider) {
          $stateProvider.state('base.route1', {
            url: '/',
            template: template,
            controller: 'Route1Controller',
            controllerAs: 'vm',
          });
        },
      ]);
