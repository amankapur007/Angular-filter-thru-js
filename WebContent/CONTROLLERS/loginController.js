/**
 * 
 */

myApp.controller('loginController',function($rootScope,$scope,$http,$window){
	$scope.go = function(){
	$rootScope.aman=["A","B","C","D","E","F","G","H","Am","Ab","Ac","V","f"];
	console.log("man:",$rootScope.aman);
	$window.location.href = 'http://localhost:8077/Angular/index.html#!/details';
	}
});