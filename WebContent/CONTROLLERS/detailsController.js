myApp.controller('detailsController',function($rootScope,$scope,$http,$filter){

	$scope.lo=function(){
	console.log("Aman::",$scope.l);
	console.log($rootScope.aman);
	$scope.aman=$filter('filter')($rootScope.aman,$scope.l)
	}
});