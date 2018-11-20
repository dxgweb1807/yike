/*
* @Author: Administrator
* @Date:   2018-11-15 16:49:22
* @Last Modified by:   deng
* @Last Modified time: 2018-11-19 20:05:58
*/
var yike =angular.module('yike',["ctrls","ngRoute"]);
yike.run(["$rootScope",function($rootScope){
       //alert("111")
       //给头部的a 标签绑定toggle方法
       $rootScope.left = false;
       $rootScope.toggle = function(){
       	     if( $rootScope.left ==true){
       	     	$rootScope.left = false;
       	     }else{
       	     	$rootScope.left =true;
       	     }
       	   var dd = document.querySelectorAll("dd");
       	   if($rootScope.left){
                 for(var i=0; i<dd.length; i++) {
					dd[i].style.transitionDuration = (i + 1) * 0.15 + 's';
					dd[i].style.transitionProperty = 'all';
					dd[i].style.transitionDelay = '0.2s';
					dd[i].style.transitionTimingFunction = 'ease-out';
					dd[i].style.transform = 'translate(0)';
		     }
       	   }else{
                for(var i=dd.length - 1; i>=0; i--) {
			     dd[i].style.transitionDuration = (dd.length - i + 1) * 0.05 + 's';
			     dd[i].style.transitionProperty = 'all';
			     dd[i].style.transitionDelay = '';
			     dd[i].style.transitionTimingFunction = 'ease-out';
			     dd[i].style.transform = 'translate(-100%)';
		     }  
       	   }
       }


}]);

//修改锚点值的改变
yike.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix("");
}])
//配置路由
yike.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/",{
    	redirectTo:"/index"  //跳转到index处理
    }).when("/index",{
    	templateUrl:"./views/test.html",//将要在ng-view区域显示
    	controller:"index"
    }).when("/old",{
    	templateUrl:"./views/test.html",//将要在ng-view区域显示
    	controller:"old"
    }).when("/author",{
    	templateUrl:"./views/test.html",//将要在ng-view区域显示
    	controller:"author"
    })
}])