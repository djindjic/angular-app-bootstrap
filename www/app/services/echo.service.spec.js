import angular from 'angular';
import 'angular-mocks';
import echoServiceModule from './echo.service';

describe('echoService', function() {
  let echoService;

  beforeEach(function() {
    angular.mock.module(echoServiceModule.name);
    angular.mock.inject(function(_echoService_) {
      echoService = _echoService_;
    });
  });

  it('for passed hello should return hello', function() {
    echoService.echo('hello').then(function(echo) {
      expect(echo).to.equal('hello');
    });
  });
});
