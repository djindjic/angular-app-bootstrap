import angular from 'angular';
import {mainConfigModule} from './config/main.config';
import {indexRouteModule} from './routes/index/index.route';
import 'app/styles/main.css!';

export let mainModule = angular.module('mohicana-global', [
  mainConfigModule.name,
  indexRouteModule.name,
]);
