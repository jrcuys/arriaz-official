(function () {
    'use strict';
    angular
        .module('app')
        .directive('navbar', navbarFn)

        // directive nm
        function navbarFn() {
            return {
                restrict: 'EA',
                templateUrl: '03_views/02_directive/header.html'
            }
        }

})()