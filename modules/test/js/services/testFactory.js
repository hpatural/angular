//'use strict';
//var testApp = angular.module('testApp', ['ngResource']);

testApp.factory('testFact',
    ['$resource', function ($resource)
    {
        //Define CRUD functions

        var resource = $resource(
            "http://localhost:63342/angular-tuto",
            {},
            {
                create: {method: 'POST', params: {}, isArray: false}
            }
        );

        //Construct a DTO object to send to server (Data Transfert Object)
        resource.serialize = function (object) {
            var DTObject = {
                'id': object.id
            }
        }

        var resource;
        return resource;
    }]);
