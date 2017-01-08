/**
 * 
 */
var myApp=angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider,$urlRouterProvider) {

$urlRouterProvider.otherwise('/home');	
$stateProvider

.state('home',{
	url:'/home',
	templateUrl:'home.html'
})
.state('details',{
	url:'/details',
	templateUrl:'details.html',
	controller:'detailsController'
})
.state('about',{
	url:'/about',
	templateUrl:'about.html'
});
});
