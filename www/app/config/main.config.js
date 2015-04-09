import angular from 'angular';
import 'angular-ui-router';

export default
angular.
  module('mainConfigModule', [
    'ui.router',
  ]).
  config(['$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true).hashPrefix('!');
    },
  ]);
