import angular from 'angular';
import {IndexController} from './lib/IndexController';

export let indexControllerModule = angular.module('indexControllerModule', []);

indexControllerModule.controller('IndexController', [IndexController]);
