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

.controller('ctrl',function ($scope,$timeout,$ionicActionSheet,$ionicLoading,$ionicLoadingConfig) {
	$scope.data=[1,2];
	//下拉刷新
	$scope.doRefresh=function(){
	  	$timeout(function(){
	      $scope.data=[11,22]
	      $scope.$broadcast('scroll.refreshComplete');//关闭刷新
	    },1000)
	  };
	  
	  //上拉加载
	$scope.loadMore=function(){
	  	$timeout(function(){
	     $scope.data=[11,22]
	     $scope.$broadcast('scroll.infiniteScrollComplete');//关闭刷新
	    },1000)
	  };
	  
		//底部弹出
		$scope.show=function(){
   var aa= $ionicActionSheet.show({
      buttons:[
      {'text':'弹出框'},
      {'text':'弹出框2'}
      ],
      titleText:'标题',
      destructiveText:'删除',
      cancelText:'取消',
//    取消事件
      cancel:function(){
      console.log('取消了')
      },
//    删除事件
      destructive:function(){

      },
//    按钮事件,可通过index下表写不同事件
     buttonClicked: function(index) {
     					console.log(index)
              return true;
            }
    })
// 自动关闭弹窗
   $timeout(function(){
   		aa()
   },5000)
  };
  
  //事件
		  $scope.longan=function(){
			alert('长按')
		}
		$scope.doubt=function(){
			alert('双击')
		}
		//加载
		$scope.loads=function(){
		$ionicLoading.show()
		    	$timeout(function(){
		//  	关闭加载动画
		      		$ionicLoading.hide()
		    },1000)
		}
  
})
.constant('$ionicLoadingConfig', {
//可以是文字，也可是icon图标
  template:'loading'
})