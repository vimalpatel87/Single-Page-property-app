var myApp = angular.module('myApp',[]);
myApp.controller('MyController', function MyController($scope,$http) {
    $scope.propertyOrder = 'name';
    $http.get('js/data.json').then(function(response){
       $scope.properties = response.data; 
    });
});