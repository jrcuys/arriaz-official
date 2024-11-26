(function () {
    'use strict';
    angular
        .module('app')
        .controller('dashCtrl', dashCtrlFn)
        // * modal
        .controller('addProdukCtrl', addProdukCtrlFn)
        .controller('deleteUserCtrl', deleteUserCtrlFn)
        .controller('rewardCtrl', rewardCtrlFn)
      
        function dashCtrlFn($state, $localStorage, $uibModal) {
            const vm = this;

            vm.clip = $localStorage.akun
            
            vm.logout = () => {
                delete $localStorage.akun;
                $state.go('acc.login')
            }

            vm.listUsers = [
                {av: '00_assets/02_images/users/user-dummy-img.jpg',
                    reward:true, 
                    wa:'+6282214865931', 
                    name:'Kirey Agus Sandi', 
                    email: 'singgih@idrive.biz.id', 
                    status: 'Active'
                },
                {av: '00_assets/02_images/users/user-dummy-img.jpg',
                    reward:false, 
                    wa:'+62895322286988', 
                    name:'Nasrul Alif M', 
                    email: 'silviarafsyana@dagnu.com', 
                    status: 'Active'
                },
                {av: '00_assets/02_images/users/user-dummy-img.jpg',
                    reward:false, 
                    wa:'+6282214865931', 
                    name:'Siti Kunaesih', 
                    email:'signal@idrive.biz.id', 
                    status: 'Active'
                },
                {av: '00_assets/02_images/users/user-dummy-img.jpg',
                    reward:true, 
                    wa:'+6282214865931', 
                    name:'Sarah Violod', 
                    email:'sarah@dagnu.com', 
                    status: 'Active'
                },
                {av: '00_assets/02_images/users/user-dummy-img.jpg',
                    reward:false, 
                    wa:'+6282214865931', 
                    name:'Pralingga Sukajaya', 
                    email:'pralingga.sukajaya@dagnu.com', 
                    status: 'Active'
                },
                {av: '00_assets/02_images/users/user-dummy-img.jpg',
                    reward:true, 
                    wa:'+6282214865931', 
                    name:'Pacuy arul', 
                    email:'pacuy@stmikitmimedan.ac.id', 
                    status: 'Not Active'
                },
                {av: '00_assets/02_images/users/user-dummy-img.jpg',
                    reward:true, 
                    wa:'+6282214865931', 
                    name:'Naisyah Saraswatix', 
                    email:'naisyah@idrive.biz.id', 
                     status: 'Active'
                },
                {av: '00_assets/02_images/users/user-dummy-img.jpg',
                    reward:true, 
                    wa:'+6282214865931', 
                    name:'Keysha Maharani', 
                    email:'keysha.maharani@dagnu.com', 
                     status: 'Active'
                },
                {av: '00_assets/02_images/users/user-dummy-img.jpg',
                    reward:true, 
                    wa:'+6282214865931', 
                    name:'kartono suwirna', 
                    email:'kartonosuwir@idrive.biz.id', 
                     status: 'Not Active'
                },
                {av: '00_assets/02_images/users/user-dummy-img.jpg',
                    reward:true, 
                    wa:'+6282214865931', 
                    name:'Irma Ayudniana', 
                    email:'irma.yudniana@dagnu.com', 
                     status: 'Active'
                },
                {av: '00_assets/02_images/users/user-dummy-img.jpg',
                    reward:true, 
                    wa:'+6282214865931', 
                    name:'Indri Yusdianingsih', 
                    email:'info@stmikitmimedan.ac.id', 
                     status: 'Active'
                },
            ]

            vm.addProduct = () => { 
                var modalInstance = $uibModal.open({
                    animation: false,
                    templateUrl : "03_views/03_modal/add_product.html",
                    controller : "addProdukCtrl as add", 
                    backdrop : 'static',
                    size: 'xl',
                    windowClass: 'show', 
                    backdropClass: 'show',
                    keyboard: false,
                    resolve: {
                        items: function () {
                            return {
                                info: 'create_mode'
                            }
                        }
                    }
                })
                modalInstance.result
                .then(function (data) {
                    console.log(data);
                }, function (err) {
                    
                });
            }
            vm.aturReward = (idx) => { 
                var modalInstance = $uibModal.open({
                    animation: false,
                    templateUrl : "03_views/03_modal/atur_reward.html",
                    controller : "rewardCtrl as reward", 
                    backdrop : 'static',
                    size: 'lg',
                    resolve: {
                        items: function () {
                            return {
                                info: 'reward_settings',
                                bawaan: vm.listUsers[idx]
                            }
                        }
                    }
                })
                modalInstance.result
                .then(function (data) {
                    console.log(data);
                }, function (err) {
                    
                });
            }
            vm.deleteUser = (idx) => { 
                var modalInstance = $uibModal.open({
                    animation: false,
                    templateUrl : "03_views/03_modal/delete_user.html",
                    controller : "deleteUserCtrl as rm", 
                    backdrop : 'static',
                    size: 'md',
                    resolve: {
                        items: function () {
                            return vm.listUsers[idx]
                        }
                    }
                })
                modalInstance.result
                .then(function (data) {
                    console.log(data);
                }, function (err) {
                    
                });
            }
            vm.hoverIn = function(event){
                //  this.hoverEdit = true;
                var el = getElement(event);
                el.addClass('flex-grow-1');
                event.editButton = true
            };
            vm.hoverOut = function(event){
                //  this.hoverEdit = false;
                var el = getElement(event);
                // Do something with element, for example remove a class
                el.removeClass('flex-grow-1');
                // console.log('hoverOut ' + el);
                event.editButton = false
            };
            vm.btnActivate = function(event){
                //  this.hoverEdit = false;
                event.showButton = !event.showButton
            };
        
            function getElement(event) {
                return angular.element(event.srcElement || event.target);
            }
        }

        function addProdukCtrlFn($scope, $uibModalInstance, items) {
            const vm = this;
        
            // Pastikan FilePond tersedia
            if (typeof FilePond === 'undefined') {
                alert('pond tidak tersedia, hubungi 082119816893 (panji)')
                return;
            }
        
            // Registrasi Plugin FilePond
            FilePond.registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);
        
            // inisiasi files array
            $scope.files = [];
            
            vm.kategori = [
                {id:1, nama:'Baju Koko Dewasa'},
                {id:2, nama:'Baju Koko Anak'},
                {id:3, nama:'Baju Gamis Dewasa'},
                {id:4, nama:'Baju Koko Anak'},
            ]

            // Tunggu hingga DOM siap sebelum menginisialisasi FilePond
            // setTimeout(() => {
            //     // const pond = FilePond.create(document.querySelector('#filepond'), {
            //     //     allowMultiple: true,
            //     //     acceptedFileTypes: ['image/png', 'image/jpeg'],
            //     //     server: {
            //     //         process: '/upload',
            //     //         revert: '/revert',
            //     //         load: '/load',
            //     //     },
            //     // });
            //     const pond = FilePond.create(document.querySelector('#filepond'), {
            //         allowMultiple: true, // Mengizinkan upload banyak file
            //         maxFileSize: '1MB',
            //         acceptedFileTypes: ['image/png', 'image/jpeg'], // Tipe file yang diizinkan
            //         instantUpload: false, // Menonaktifkan upload otomatis
            //         server: null, // Menonaktifkan server (hanya preview lokal)
            //     });
        
            //     $scope.resetFilePond = function () {
            //         pond.removeFiles();
            //     };
            // }, 0);
        
            vm.konfigVariasi = () => {
                vm.settingVariasi = true
            }
            vm.listVariasi1 = [
                { id: 1, nama_variasi: 'Warna' },
                // { id: 2, nama_variasi: 'Ukuran' },
            ];

            // Handle changes in variations (either Warna or Ukuran)
            vm.handleChange1 = () => {
                vm.usedVariasi = {}; // Reset used variations

                // Track selected variations for both variations 1 and 2
                if (vm.produk.variasi1 && vm.produk.variasi1.nama_variasi) {
                    vm.usedVariasi[vm.produk.variasi1.nama_variasi] = true;
                }
                if (vm.produk.variasi2 && vm.produk.variasi2.nama_variasi) {
                    vm.usedVariasi[vm.produk.variasi2.nama_variasi] = true;
                }

                // Handling 'Warna' and 'Ukuran' for Variasi 1
                if (vm.produk.variasi1) {
                    if (vm.produk.variasi1.nama_variasi === 'Warna') {
                        vm.formWarna = true;
                        vm.formSize = false;
                        vm.listWarna = [
                            { idWarna: 'pth', nama: 'Putih' },
                            { idWarna: 'mrh', nama: 'Merah' },
                            { idWarna: 'org', nama: 'Orange' },
                            { idWarna: 'kng', nama: 'Kuning' },
                            { idWarna: 'hju', nama: 'Hijau' },
                            { idWarna: 'bru', nama: 'Biru' },
                            { idWarna: 'ung', nama: 'Ungu' },
                            { idWarna: 'mmd', nama: 'Merah Muda' },
                            { idWarna: 'hjt', nama: 'Hijau Tua' },
                            { idWarna: 'bmd', nama: 'Biru Muda' },
                        ];
                        vm.selectedWarna = [{}]; // Initialize the selected colors
                    } else if (vm.produk.variasi1.nama_variasi === 'Ukuran') {
                        vm.formSize = true;
                        vm.formWarna = false;
                        vm.selectedSizes = ['']; // Reset selected sizes
                    }
                }

                // Handling 'Warna' and 'Ukuran' for Variasi 2
                if (vm.produk.variasi2) {
                    if (vm.produk.variasi2.nama_variasi === 'Warna') {
                        vm.formWarna2 = true;
                        vm.formSize2 = false;
                    } else if (vm.produk.variasi2.nama_variasi === 'Ukuran') {
                        vm.formSize2 = true;
                        vm.formWarna2 = false;
                        vm.selectedSizes = ['']; // Reset selected sizes
                    }
                }
            };

            // Reset the variations
            vm.resetVariasi = () => {
                // Clear selected variations
                vm.produk.variasi1 = null;
                vm.produk.variasi2 = null;
                vm.formWarna = false;
                vm.formSize = false;
                vm.formWarna2 = false;
                vm.formSize2 = false;
                vm.usedVariasi = {}; // Reset usedVariasi
            };

            vm.selectedWarna = vm.selectedWarna || [{}];
            vm.selectedSizes = vm.selectedSizes || [];
            vm.selectedVariations = vm.selectedVariations || []; 
            vm.updateDropdown = () => {
                const lastWarna = vm.selectedWarna[vm.selectedWarna.length - 1]; // Get the last selected color
            
                if (lastWarna && lastWarna.selected) {
                    vm.selectedWarna.push({});
                    vm.disabledWarna = vm.selectedWarna
                        .filter(warna => warna.selected)
                        .map(warna => warna.selected.idWarna);
            
                    let newVariation = {
                        warna: lastWarna.selected.nama,
                        konfigKriteria: [{
                            ukuran: '',
                            harga: '',
                            stok: 0,  
                            kode: ''  
                        }]
                    };
                    
                    vm.selectedVariations.push(newVariation);
                }
            };
            vm.tambahKriteria = function(variationIndex) {
                if (!vm.selectedVariations[variationIndex].konfigKriteria) {
                    vm.selectedVariations[variationIndex].konfigKriteria = [];
                }
                vm.selectedVariations[variationIndex].konfigKriteria.push({
                    ukuran: '',
                    harga: '',
                    stok: '',
                    kode: ''
                });
            };
            vm.hapusKriteria = function(variationIndex, kriteriaIndex) {
                vm.selectedVariations[variationIndex].konfigKriteria.splice(kriteriaIndex, 1);
            };
            
            // Fungsi untuk memeriksa apakah warna dinonaktifkan
            vm.isWarnaDisabled = (warna) => {
                return vm.disabledWarna.includes(warna.idWarna);
            };
            // Hapus dropdown jika warna kosong atau tidak valid
            vm.removeEmptyDropdowns = (variationIndex) => {
                vm.selectedWarna = vm.selectedWarna.filter((warna) => warna.selected);
                vm.selectedVariations.splice(variationIndex, 1);
            };
            
            // Simpan atau Tutup
            vm.produk = {};
            vm.save = () => {
                if ($scope.files.length > 0) {
                    vm.produk = {
                        iklan: {
                            images: $scope.files,
                            namaIklan: vm.produk.nama_produk,
                            kategoriIklan: vm.produk.kategori,
                            deskripsiIklan: vm.produk.deskripsi,
                            bahanIklan: vm.produk.bahan,
                            hargaIklan: vm.produk.harga_produk_iklan,
                            potonganIklan: vm.produk.potongan_iklan,
                        },
                        tersedia: {
                            variasiTersedia: vm.produk.variasi1,
                            warnaTersedia: vm.selectedWarna,
                            detilProdukTersedia: vm.selectedVariations,
                        }
                    };
                    console.log(vm.produk);
                    // $uibModalInstance.close(vm.produk);
                } else {
                    alert('gambar kosong!!!');
                }
            };
            vm.close = () => {
                $uibModalInstance.dismiss('dismiss');
            };
        }
        
        function deleteUserCtrlFn($uibModalInstance, items) {
            const vm = this;

            // as rm
            vm.user = items;
            vm.remove = () => {
                $uibModalInstance.close('user been deleted')
            }
            vm.close = () => {
                $uibModalInstance.dismiss('dismiss')
            }
        }

        function rewardCtrlFn($uibModalInstance, items) {
            const vm = this;
            // as reward
            vm.user = items;
            console.log(vm.user);
            vm.openReward = () => {
                vm.formReward = !vm.formReward
            }
            vm.saveNewPass = () => {
                $uibModalInstance.close('reset success')
            }
            vm.close = () => {
                $uibModalInstance.dismiss('dismiss')
            }
        }
})()
