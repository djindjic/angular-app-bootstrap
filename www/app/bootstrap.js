/*eslint-disable angular/ng_document_service */

import angular from 'angular';
import mainModule from './main';

angular.element(document).ready(function() {
  angular.bootstrap(document.querySelector('[data-main-app]'), [
    mainModule.name,
  ], {
    strictDi: true,
  });
});
