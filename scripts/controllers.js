/*
* @Author: deng
* @Date:   2018-11-19 16:16:58
* @Last Modified by:   deng
* @Last Modified time: 2018-11-19 20:32:01
*/
//定义控制器
angular.module("ctrls",[])
.controller("navs",["$scope",function($scope){
	$scope.navs = [
            {link:"#/index",icon:"icon-home",text:"今日一刻"},
            {link:"#/old",icon:"icon-file-empty",text:"往期内容"},
			{link:"#/author",icon:"icon-pencil",text:"热门作者"},
			{link:"#/category",icon:"icon-menu",text:"栏目浏览"},
			{link:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
			{link:"#/settings",icon:"icon-cog",text:"设置"}
	];
}])

//创建index控制器
.controller("index",["$scope","$rootScope",function($scope,$rootScope){
	$scope.msg = "控制器获取的index数据";
	$rootScope.num=0;
}])

//创建older控制器
.controller("old",["$scope","$rootScope",function($scope,$rootScope){
	$scope.msg = "控制器获取的old数据";
	$rootScope.num=1;
}])

//创建index控制器
.controller("author",["$scope","$rootScope",function($scope,$rootScope){
	$scope.msg = "控制器获取的author数据";
	$rootScope.num=2;
}])
