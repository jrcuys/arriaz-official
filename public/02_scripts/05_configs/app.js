/**
 * @ngdoc overview
 * @name siapv3
 * @description
 * # app
 *
 * Main module of the application.
 */

(function() {
  'use strict';
  angular
    .module('app', [
      'ngStorage',
      'ui.router',
      'oc.lazyLoad',
      'mdo-angular-cryptography',
      'ui.bootstrap',
      'ngSanitize',
      'truncate'
    ]);
})();