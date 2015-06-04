import angular from 'angular';
import template from './template.html!text';
import './style.css!';

export default
  angular.
    module('prHeaderMenuModule', []).
    directive('prHeaderMenu', function() {
      return {
        restrict: 'E',
        transclude: true,
        template: template,
      };
    });
