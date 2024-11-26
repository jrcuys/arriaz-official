(function () {
    'use strict';
    angular
        .module('app')
        .controller('mainCtrl', mainCtrlFn)
        .controller('termsCtrl', termsCtrlFn)

        // directive history back JS vanilla
        .directive('historyBack', historyBackFn)
      
        function mainCtrlFn($uibModal) {
            const vm = this;
            
            vm.sendRegister = () => {
                var modalInstance = $uibModal.open({
                    animation: false,
                    templateUrl : "03_views/03_modal/notifSuccess.html",
                    // controller : "newUserCtrl as newUser", 
                    backdrop : 'static',
                    size: 'md',
                    // resolve: {
                    //     actualData: function () {
                    //         return vm.studentData;
                    //     }
                    // }
                })
                modalInstance.result
                .then(function (data) {
                    // vm.dataPengguna = data;
                }, function (err) {
                    console.log(err);
                });
            }
            vm.viewTerms = () => {
                var modalInstance = $uibModal.open({
                    animation: false,
                    templateUrl : "03_views/03_modal/termsOfCondition.html",
                    controller : "termsCtrl as term", 
                    backdrop : 'static',
                    size: 'lg'
                })
                modalInstance.result
                .then(function (data) {
                    // vm.dataPengguna = data;
                }, function (err) {
                    console.log(err);
                });
            }
        }

        function termsCtrlFn($uibModalInstance) {
            const vm = this;

            vm.close = () => {
                $uibModalInstance.dismiss()
            }
        }

        // directive, ini adalah contoh coding yg salah. tidak di manage dengan baik
        // CTRL dan Directive berada pada 1 file yang sama
        function historyBackFn($window) {
            return {
                restrict: 'EA',
                scope: {
                    history: '='
                },
                link: function(scope, element, attrs) {
                    element.on('click', function() {
                        $window.history.back();
                    });
                }               
            }
        }
})()
