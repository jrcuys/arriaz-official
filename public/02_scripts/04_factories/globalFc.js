(function () {
	'use strict';
	angular.module('app')
	.factory('ajaxCall', ajaxCallFn)
	.factory('tokenFc', tokenFcFn)

	function ajaxCallFn($q, $http){
		return getDataFn;
		function getDataFn(options) {
			var d = $q.defer()
      		// For each second in the delay, we will notify the caller
			var x = $http(options)
			x.then(function(data){	
				if (data) {
					d.resolve(data.data);
				}else{
					d.reject('kosong');
				}
			}, function(err){
				d.reject(err);
			})
			return d.promise;			
		}
	}

	// token
	function tokenFcFn(e2eFc) {
		var payload = {};
		function getToken() {
			return e2eFc({
                url : '/v1/api/tkn/gen',
                method : 'POST',
                pgState : "general", 
                mdlState : "get new Token", 
                payload : payload
            })
		}
		return {
			getToken : getToken
		}
	}
})();