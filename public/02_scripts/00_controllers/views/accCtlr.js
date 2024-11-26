(function () {
    'use strict';
    angular
        .module('app')
        .controller('loginCtrl', loginCtrlFn)
        .controller('regCtrl', regCtrlFn)
      
        function loginCtrlFn($scope, $state, $localStorage, accFc) {
            const vm = this;

            function errorHandler(err) {
                if (err) {
                    vm.error = true
                    vm.textErr = 'akun tidak ditemukan'
                }else if (err.status == 403) {
                    vm.error = true
                    vm.textErr = 'akses login ditolak'
                }else if (err.status == 500){
                    vm.error = true
                    vm.textErr = 'telah terjadi kesalahan, silahkan refresh browser anda dan mohon ulangi'
                }
            }

            vm.showHidePass = function () { vm.typePassword = !vm.typePassword; };
            
            vm.goLogin = () => { 
                const akun = {
                    kode: 'arriaz123',
                    pass: 'arriaz123',
                }
                if (vm.akun.kode == akun.kode && vm.akun.pass == akun.pass) {
                    $state.go('dash.moderator')
                } else {
                    vm.error = true 
                    vm.textErr = 'kode atau kata sandi salah'
                }
                // if (vm.accWs.user && vm.accWs.pass) { 
                //     accFc.login(vm.accWs) 
                //     .then((resp) => { 
                //         console.log(resp); 
                //     }, (err) => { 
                //         console.log(err); 
                //         errorHandler(err)
                //     }) 
                // } 
            }
        }

        function regCtrlFn($state) {
            const vm = this;

            vm.showHidePass = () => {
                vm.typePassword = !vm.typePassword; 
            }
            
            vm.regAccount = () => {
                console.log(vm.account);
                $state.go('acc.login', null, {reload:true})
            }
        }
})()
