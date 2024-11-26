/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
(function() {
    'use strict';
    angular
      .module('app')
      .run(runBlock)
      .config(config);

      runBlock.$inject = ['$rootScope', '$state', '$stateParams'];
      function runBlock($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }

      config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'MODULE_CONFIG'];
      function config($stateProvider, $urlRouterProvider, $locationProvider, MODULE_CONFIG) {
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
        $urlRouterProvider
          .otherwise('/arriaz-muslim-wear/');
        $stateProvider
        // if error page
        .state('err', {
          abstract: true,
          url: '/error',
          templateUrl: '03_views/00_layouts/03_error/err_ly.html'
        })
            .state('err.404', {
              url: '/404',
              templateUrl: '03_views/01_pages/03_error_pg/404.html'
            })
            .state('err.500', {
              url: '/500',
              templateUrl: '03_views/01_pages/03_error_pg/500.html'
            })

        // ** first page to load
        .state('milo', {
          abstract: true,
          url: '/arriaz-muslim-wear',
          controller: 'miloStoreCtrl as milo',
          templateUrl: '03_views/00_layouts/00_publicLy/lyMain.html',
          resolve:load([
            '02_scripts/00_controllers/miloStoreCtrl.js'
          ])
        })
            .state('milo.store', {
                url: '/',
                templateUrl: '03_views/01_pages/miloStore.html'
            })
            .state('milo.detil', {
                url: '/:id',
                templateUrl: '03_views/01_pages/detilProduk.html'
            })

        .state('acc', {
          abstract: true,
          url: '/acc',
          templateUrl: '03_views/00_layouts/00_publicLy/lyAcc.html',
          resolve:load([
            '02_scripts/04_factories/accFc.js',
            '02_scripts/00_controllers/views/accCtlr.js'
          ])
        })
        .state('acc.login', {
            url: '/login',
            controller: 'loginCtrl as login',
            templateUrl: '03_views/01_pages/00_access/pgLogin.html'
        })
        .state('acc.reg', {
            url: '/reg',
            controller: 'regCtrl as reg',
            templateUrl: '03_views/01_pages/00_access/pgRegister.html'
        })
        // ** dashboard page student & parents
        .state('dash', {
            abstract: true,
            url: '/dash',
            controller: 'dashCtrl as dash',
            templateUrl: '03_views/00_layouts/00_publicLy/lyDashboard.html',
            resolve:load([
              '02_scripts/00_controllers/views/dashCtrl.js'
            ])
        })
            .state('dash.moderator', {
                url: '/moderator',
                templateUrl: '03_views/01_pages/01_dashboard/dashboard_moderator.html',
            })
            .state('dash.users', {
                url: '/users',
                templateUrl: '03_views/01_pages/01_dashboard/dashboard_list_users.html',
            })

        function load(srcs, callback) {
          return {
              deps: ['$ocLazyLoad', '$q',
                function( $ocLazyLoad, $q ){
                  var deferred = $q.defer();
                  var promise  = false;
                  srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                  if(!promise){
                    promise = deferred.promise;
                  }
                  angular.forEach(srcs, function(src) {
                    promise = promise.then( function(){
                      angular.forEach(MODULE_CONFIG, function(module) {
                        if( module.name == src){
                          src = module.module ? module.name : module.files;
                        }
                      });
                      return $ocLazyLoad.load(src);
                    } );
                  });
                  deferred.resolve();
                  return callback ? promise.then(function(){ return callback(); }) : promise;
              }]
          }
        }

        function getParams(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
      }
})();
