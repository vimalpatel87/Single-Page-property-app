var myControllers = angular.module('myControllers',[]);
myControllers.controller('SearchController', function MyController($scope,$http) {
    $scope.propertyOrder = 'name';
    $http.get('js/data.json').then(function(response){
       $scope.properties = response.data; 
    });
});