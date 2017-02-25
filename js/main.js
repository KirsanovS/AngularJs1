var regApp = angular.module('regApp', ["ngRoute","ngSanitize","ngAnimate"]);
 regApp.controller('main', function ($scope,$location,$routeParams,$templateCache,serviceItems,$http,$timeout){
	 
	$scope.items = serviceItems.items;
	 
	$scope.createMonitor = function(ind){
		if(ind=="close"){ $scope.hideEl = 0; return}
		$scope.ind = ind;
		var items = angular.element(document.getElementsByClassName('items'));
		var monitor = angular.element(document.getElementsByClassName('monitor')[0]);
		ind = smalRecursion(ind+1); 
		$scope.hideEl = angular.element(items[ind-1]).after(monitor);	
		 
		function smalRecursion(indElement){	 
			if((indElement!=0)&&(indElement%3==0)){
				if(indElement>$scope.items.length-($scope.items.length%3)){indElement=$scope.items.length; return indElement;}
				return indElement; 
			}else{ 
				return smalRecursion(indElement+1);
			}
		}	
		 
	}
	/* $scope.checkLocation = function(){
		if($location.url().indexOf('page2') == 1){ return 0 }else{ return 1 }	 
	}();
	 
	$timeout(function () {	 	 
	//var footer = document.getElementById('footer'); 
	//footer.style.top = window.getComputedStyle(document.getElementsByTagName('html')[0]).height;;
	}, 3000); 
	 
	$document.find("button").on("click", function (event) {
        $window.alert(event.target.innerText);
    }); */

	//-----------------------------------------------------------------------------
	$scope.$on("$routeChangeSuccess", function(){
        var id = $routeParams["idDinamic"];
		if(id){ 
			// $scope.OnePage = cerviceOnePage.getOnePage(id);
			 $scope.onePage = serviceItems.getItem(id);	
				 
		}			
	})
	//-----------------------------------------------------------------------------	
} );

 
regApp.filter('showObj', function(){
		var count = 0;
		return function(obj){		 
			//console.log(obj,count++)
			//if( obj == 3 ){ return 'X' }else{return obj}
			return obj;
		}
	});
	
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 //----------------url--------------------------------------------------------------------------
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /* regApp.config(function($routeProvider){
	$routeProvider.when('/question',
	{
		templateUrl:'tamplates/add1.html',
		controller:'reg'
	});
	$routeProvider.when('/answer',
	{
		templateUrl:'tamplates/add2.html',
		controller:'reg'
	});
	$routeProvider.otherwise('/answer',
	{
		redirectTo: 'tamplates/add3.html'
	});
}); */
 
 
 
