import angular from 'angular';
import 'angular-ui-router';
import template from './index.template.html!text';
import {indexControllerModule} from './index.controller';

export let indexRouteModule = angular.module('indexRouteModule', [
  'ui.router',
  indexControllerModule.name
]).config(['$stateProvider', function ($stateProvider){
    $stateProvider.state('index', {
      url: '/',
      template: template,
      controller: 'IndexController',
      controllerAs: 'ctrl',
    });
  }
]);
