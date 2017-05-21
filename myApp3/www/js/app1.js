// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider,$urlRouterProvider) {
	$stateProvider
	.state('tabs',{
		url:'/tab',
		templateUrl:'templates/tabs.html'
	})
	.state('tabs.other',{
		url:"/other",
		views:{
			'tab-other':{
				templateUrl:'templates/other.html'
			}
		}
		
	})
	.state('tabs.home',{
		url:"/home",
		views:{
			'tab-home':{
				templateUrl:'templates/home.html',
				controller:'home'
			}
		}
		
	})
	.state('tabs.hlist',{
			url:'/home/:id',
			views:{
				'tab-home':{
					templateUrl:'templates/hlist.html',
					controller:'ctrl1'
				}
			}
		})
	.state('tabs.about',{
		url:"/about",
		views:{
			'tab-about':{
				templateUrl:'templates/about.html',
				controller:'ctrl'
				
			}
		}
		
	})
	.state('tabs.ablist',{
			url:'/about/:id',
			views:{
				'tab-about':{
					templateUrl:'templates/aboutdet.html',
					controller:'abd'
				}
			}
		})
	.state('tabs.first',{
		url:"/first",
		views:{
			'tab-home':{
				templateUrl:'templates/first.html',
				controller:'first'
			}
		}
		
	})
	.state('tabs.slist',{
			url:'/first/:id',
			views:{
				'tab-home':{
					templateUrl:'templates/salist.html',
					controller:'sl'
				}
			}
		})
	.state('tabs.second',{
		url:"/second",
		views:{
			'tab-home':{
				templateUrl:'templates/second.html'
			}
		}
		
	})
	
	.state('tabs.xiao',{
		url:"/xiao",
		views:{
			'tab-home':{
				templateUrl:'templates/xiaoc.html',
				controller:'xiao'
			}
		}
		
	})
	
	.state('tabs.xlist',{
			url:'/xiao/:id',
			views:{
				'tab-home':{
					templateUrl:'templates/xilist.html',
					controller:'xdetial'
				}
			}
		})
	
	.state('tabs.hulian',{
		url:"/hulian",
		views:{
			'tab-home':{
				templateUrl:'templates/hulian.html',
				controller:'hulian'
			}
		}
		
	})
	$urlRouterProvider.otherwise('/tab/home')
})
.controller('ctrl',function ($scope,$http) {
		$http({
			method:'get',
			url:"hlist.json"
		}).success(function (data) {
			$scope.arr = data
		})
	})

.controller('home',function ($scope,$http) {
		$http({
			method:'get',
			url:"hlist.json"
		}).success(function (data) {
			console.log(data)
			$scope.arr = data
		})
	})

.controller('ctrl1',function ($scope,$http,$stateParams) {
		$http({
			method:'get',
			url:"hlist.json"
		}).success(function (data) {
			$scope.str = data[$stateParams.id].con;
			$scope.title = data[$stateParams.id].title;
			$scope.img = data[$stateParams.id].img;
			
		})
	})


.controller('first',function ($scope,$http) {
		$http({
			method:'get',
			url:"first.json"
		}).success(function (data) {
			console.log(data)
			$scope.arr = data
		})
	})

.controller('sl',function ($scope,$http,$stateParams) {
		$http({
			method:'get',
			url:"first.json"
		}).success(function (data) {
			$scope.str = data[$stateParams.id].con;
			$scope.title = data[$stateParams.id].title;
			$scope.img = data[$stateParams.id].img;
			
		})
	})

.controller('xiao',function ($scope,$http) {
		$http({
			method:'get',
			url:"xiao.json"
		}).success(function (data) {
			console.log(data)
			$scope.arr = data
		})
	})

.controller('xdetial',function ($scope,$http,$stateParams) {
		$http({
			method:'get',
			url:"xiao.json"
		}).success(function (data) {
			$scope.str = data[$stateParams.id].con;
			$scope.title = data[$stateParams.id].title;
			$scope.img = data[$stateParams.id].img;
			
		})
	})

.controller('hulian',function ($scope,$http) {
		$http({
			method:'get',
			url:"first.json"
		}).success(function (data) {
			console.log(data)
			$scope.arr = data
		})

})

.controller('abd',function ($scope,$http,$stateParams) {
		$http({
			method:'get',
			url:"first.json"
		}).success(function (data) {
			$scope.str = data[$stateParams.id].con;
			$scope.title = data[$stateParams.id].title;
			$scope.img = data[$stateParams.id].img;
			
		})
	})
