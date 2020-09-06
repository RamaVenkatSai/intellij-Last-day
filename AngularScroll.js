/// <reference path="jquery.js"/>
var app=angular.module("myman",[])
    .controller("mycontroller",function($scope,$location,$anchorScroll){
        $scope.scrollTo=function(scrol){
            $location.hash(scrol);

            $anchorScroll();



        }




    });