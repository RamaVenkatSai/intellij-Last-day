/// <reference path="jquery.js"/>
var app=angular.module("mymodule",[])
               .controller("mycontroller",function($scope){
        var employees = [
            {
                name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                gender: "Male", salary: 55000.788
            },
            {
                name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                gender: "Female", salary: 68000
            },
            {
                name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                gender: "Male", salary: 57000
            },
            {
                name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                gender: "Female", salary: 53000
            },
            {
                name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                gender: "Male", salary: 60000
            }
        ];
        $scope.employees = employees;
        $scope.count = 3;
        $scope.sortData = "name";
        $scope.order=false;

        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ?
                !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {

            if ($scope.sortColumn == column) {
                return $scope.reverseSort
                    ? 'arrow-down'
                    : 'arrow-up';
            }

            return '';
        }
        $scope.search = function (item) {
            if ($scope.searchText == undefined) {
                return true;
            }
            else {
                if (item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }

            return false;
        };









    });