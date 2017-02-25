regApp.config(function($routeProvider){
	$routeProvider.when('/main',
	{
		templateUrl:'tamplates/main.html',
		controller:'main'
	});
	$routeProvider.when("/page2/:idDinamic", 
	{
		templateUrl: "tamplates/add2.html",
		controller:'main'
	});
	$routeProvider.otherwise( 
	{
		redirectTo: '/main'
	});
}).run(function($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){ 
             $templateCache.remove(current.templateUrl);
			 $templateCache.remove(next.templateUrl);
        }
    });
}); 