/// <reference path="jquery.js"/>
var myapp=angular.module("myModule",[]);
myapp.controller("mycontroller",function($scope){
    var employees=[
        {Firstname:"manhole",Lastname:"hai",gender:"man"},
        {Firstname:"second",Lastname:"hai",gender:"man"},
        {Firstname:"jjj",Lastname:"hai",gender:"man"},
        {Firstname:"mm",Lastname:"hai",gender:"man"},
        {Firstname:"nn",Lastname:"hai",gender:"man"}




    ];

    var cities=[
        {name:"manhole",
            villages:[{name:"munigepalli"},
                {name:"kusumanchi"},
                {name:"badradri"}]},
        {name:"manhole1",
            villages:[{name:"munigepalli1"},
                {name:"kusumanchi1"},
                {name:"badradri1"}]},
        {name:"manhole2",
            villages:[{name:"munigepalli2"},
                {name:"kusumanchi2"},
                {name:"badradri2"}]},

    ];
    $scope.employees=employees;
    $scope.cities=cities;
    $scope.message="hai man";
});
