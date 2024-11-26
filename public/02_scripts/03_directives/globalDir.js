(function () {
    'use strict';
    angular
        .module('app')
        .directive('checkRepass', cRPFn)
        .directive('filepond', filepondFn)
        .directive('autoResize', autoResizeFn)
        
        function cRPFn() {
            return {
                require: 'ngModel',
                link : function (sc, el, at, ct) {
                    sc.$watch(at.passabove, function (v) {
                        // console.log(v);
                    })
                    ct.$validators.repass = function (m, v) {
                        var val = v || m
                        // console.log(at.passabove, val);

                        return at.passabove === val
                    }

                     el.on('keyup', function () {
                        el.removeClass('is-valid')
                        el.removeClass('is-invalid')
                        
                        if (ct.$valid) {
                            el.addClass('is-valid')
                        } else {
                            el.addClass('is-invalid')
                        }
                    })
                }
            }
        }
        function filepondFn() {
            return {
                restrict: 'E',
                require: 'ngModel',
                link: function (scope, element, attrs, ngModel) {
                    // Initialize FilePond
                    const pond = FilePond.create(element[0], {
                        acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
                        allowFileSizeValidation: true,
                        maxFileSize: '1MB',
                        imageCropAspectRatio: '1:1',
                        maxFiles: 5,
                        labelFileTypeNotAllowed: 'Hanya file gambar yang diizinkan!',
                        fileValidateTypeLabelExpectedTypes: 'Harus berupa gambar (PNG, JPEG, JPG)',
                        labelMaxFileSizeExceeded:'ukuran file maksimal 1 mb',
                        labelMaxFileSize:'gagal!!! ukuran file maksimal 1 mb'
                    });

                    // Update AngularJS Model saat FilePond berubah
                    pond.on('updatefiles', () => {
                        const files = pond.getFiles().map(file => file.file);
                        scope.$apply(() => ngModel.$setViewValue(files));
                    });

                    // Sinkronisasi model AngularJS dengan FilePond
                    ngModel.$render = function () {
                        const files = ngModel.$viewValue || [];
                        pond.setOptions({
                            files: files.map(file => ({ source: file }))
                        });
                    };
                }
            };
        }
        function autoResizeFn() {
            return {
                restrict: 'A',
                link: function(scope, element, attributes) {
                    element.on('input', function() {
                        this.style.height = 'auto';
                        this.style.height = (this.scrollHeight) + 'px';
                    });

                    scope.$watch(attributes.ngModel, function() {
                        element[0].style.height = 'auto';
                        element[0].style.height = (element[0].scrollHeight) + 'px';
                    });
                }
            }
        }

})()
