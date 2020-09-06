/// <reference path="jquery.js"/>
   var app=angular.module("mymodule",[])
               .controller("mycontroller",function($scope){
                   var technologies=[{name:"c",likes:0,dislikes:0},
                       {name:"java",likes:0,dislikes:0},
                       {name:"c++",likes:0,dislikes:0},
                       {name:"python",likes:0,dislikes:0},



                   ]
                   $scope.technologies=technologies;
                   $scope.incrementlikes=function(technologies){
                       technologies.likes++;

                   };
                   $scope.incrementdislikes=function(technologies){
                       technologies.dislikes++;

                   };

               });