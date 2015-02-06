/**
 * Created by Hugo on 05/02/2015.
 */
'use strict';
var testApp = angular.module('testApp', ['ngResource']);

testApp.controller('newTestController', ['testFact', '$scope', function (testFact, $scope) {
    $scope.test = new testFact;

    var error = function (response, args)
    {
        alert("error");
    };

    var success = function (response, args)
    {
        alert("success");
    };

    testFact.create(testFact.serialize($scope.test), success, error);

}]);
