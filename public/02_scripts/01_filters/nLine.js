(function() {
    'use strict';
    angular
		.module('app')
		.filter('fromNow', fromNow)
		.filter("nl2br", nl2brFn)
		function fromNow() {
		    return function(date) {
		      return moment(date).fromNow();
		    }
		}
		function nl2brFn() {
			return function(data) {
			  if (!data) return data;
			  return data.replace(/\n\r?/g, '<br />');
			};
		};
})();
