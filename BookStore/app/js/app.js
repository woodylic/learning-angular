var bookStoreApp = angular.module('bookStoreApp', [
	'ngRoute', 'ngAnimate',
	'bookStoreCtrls' /*, 'bookStoreServices', 'bookStoreFilters', 'bookStoreDirectives'*/
]);

bookStoreApp.config(function($routeProvider){	
	$routeProvider
		.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})
		.when('/list', {
			templateUrl: 'templates/bookList.html',
			controller: 'BookListCtrl'
	}).otherwise({
			redirectTo: '/home'
	});
})