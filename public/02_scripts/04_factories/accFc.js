(function () {
	'use strict';
	angular.module('app')

	// apoteker
	.factory('accFc', accFcFn)
	.factory('LocalStorageService', LocalStorageServiceFn)

	function accFcFn(ajaxCall) {
        let host = "http://localhost:9000"
        // let host = ""

        function addPengguna(payload) {
            var payload = payload; 

            return ajaxCall({
                url : host + '/api/admin/pengguna/add', 
                method : 'POST', 
                data : payload, 
                dataType : 'json'
            })

        }
        function editPengguna(id, pl) {
            // var payload = payload; 

            return ajaxCall({
                url : host + '/api/admin/pengguna/edit', 
                method : 'POST', 
                // data : payload, 
                data : {
                    _id : id,
                    pl : pl
                }, 
                dataType : 'json'
            })

        }

        function loginWithGoogle(payload) {
            var payload = {
                id : payload
            }; 

            return ajaxCall({
                url : host + '/api/usr/login', 
                method : 'POST', 
                data : payload, 
                dataType : 'json'
            })

        }

        function login(payload) {
            var payload = {
                email : payload.user,
                pass : payload.pass
            }; 

            return ajaxCall({
                url : host + '/api/usr/login', 
                method : 'POST', 
                data : payload, 
                dataType : 'json'
            })

        }

        
        return {
            addPengguna : addPengguna,
            editPengguna : editPengguna,
            loginWithGoogle : loginWithGoogle,
            login : login
		};
	}

    function LocalStorageServiceFn($window) {
        var service = {
            store: store,
            retrieve: retrieve,
            clear: clear,
            clearAll: clearAll
        };

        return service;

        function store(key, value) {
            $window.localStorage.setItem(key, angular.toJson(value, false));
        }

        function retrieve(key) {
            return $window.localStorage.getItem(key);
            // return angular.fromJson($window.localStorage.getItem(key));
            // I'm not 100% sure, but I think I need to de-serialize the json that was stored
        }

        function clear(key) {
            $window.localStorage.removeItem(key);
        }


        function clearAll() {
            $window.localStorage.clear();
        }
    }
})();