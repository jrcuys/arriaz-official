// lazyload config
(function() {
    'use strict';
    angular
      .module('app')
      .constant('MODULE_CONFIG', [
        {
          name: 'ui.select',
              module: true,
              serie: true,
              files: [
                  '01_libs/03_vanilla/angular-ui-select/dist/select.min.js',
                  '01_libs/03_vanilla/angular-ui-select/dist/select.min.css'
              ]
        },
        {
          name: 'ckeditor',
              module: true,
              serie: true,
              files: [
                  '01_libs/03_vanilla/ckeditor/ckeditor.js',
                  '01_libs/03_vanilla/angular-ckeditor/angular-ckeditor.js'
              ]
        }

        ]
      )
      .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
          $ocLazyLoadProvider.config({
              debug: false,
              events: false,
              modules: MODULE_CONFIG
          });
      }]);
})();

