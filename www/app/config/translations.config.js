import angular from 'angular';
import 'angular-translate';
import english from 'app/translations/EN';
import german from 'app/translations/DE';
import serbian from 'app/translations/SR';

export default
angular.
  module('translationsConfigModule', [
    'pascalprecht.translate',
  ]).
  config(['$translateProvider', function ($translateProvider) {
      $translateProvider.useSanitizeValueStrategy('escaped');

      $translateProvider.translations('en', english);
      $translateProvider.translations('de', german);
      $translateProvider.translations('sr', serbian);

      $translateProvider.preferredLanguage('sr');
    },
  ]);
