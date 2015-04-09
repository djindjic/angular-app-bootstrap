// https://github.com/sydcanem/angularjs-testing-cheat-sheet
// http://stackoverflow.com/questions/20433485/angular-ui-router-unit-testing-states-to-urls
// http://www.jvandemo.com/how-to-resolve-angularjs-resources-with-ui-router/
// http://stackoverflow.com/questions/28557749/angular-jasmine-ui-router-inject-resolve-value-into-test
// http://bardo.io/posts/testing-your-ui-router-configuration/
// http://stackoverflow.com/questions/22569574/angularjs-unit-test-a-controller-dependent-on-route-resolve


// import angular from 'angular';
// import mocks from 'angular-mocks';
// import echoServiceModule from 'app/services/echo.service';
// import baseRouteModule from 'app/routes/base.route';
// import controller from './controller';
//
// describe('Route1Controller', function() {
//   let $controller;
//
//   beforeEach(function() {
//     angular.mock.module(controller.name);
//     angular.mock.inject(function(_$controller_) {
//       $controller = _$controller_;
//     });
//   });
//
//   it('scone echo should be route 1', function() {
//     let scope = {};
//     let fakeRoute = {
//       current: {
//         locals: {
//           echoServiceResolve: function() {
//             return {a: 1};
//           },
//         },
//       },
//     };
//     $controller('Route1Controller', { $scope: scope, echoServiceResolve: fakeRoute });
//     expect(scope.echo).to.equal('route 1');
//   });
// });
