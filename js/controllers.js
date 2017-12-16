var myControllers = angular.module('myControllers',[]);
myControllers.controller('SearchController', function MyController($scope,$http) {
    $scope.propertyOrder = 'name';
    $http.get('js/data.json').then(function(response){
       $scope.properties = response.data; 
    });
});

myControllers.controller('DetailsController', function MyController($scope,$http,$routeParams) {
    $http.get('js/data.json').then(function(response){
       $scope.properties = response.data; 
        $scope.whichItem = $routeParams.itemId;
        
         if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.properties.length - 1;
    }

    if ($routeParams.itemId < $scope.properties.length-1) {
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0;
    }
        
        
    });
});