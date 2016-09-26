console.log('js sourced');
var myApp = angular.module('myApp',[]);
myApp.controller('viewHeroesController', ['$scope','$http',function($scope, $http){
  console.log('viewHeroesController');

$scope.init = function(){
  console.log('init working');
   $http({
    method:"GET",
    url:"/getHero",
  }).then(function(results){
    $scope.toDom = results.data;
    console.log('this is the response',toDom);
  });//http callback function
};//init function
}]);//viewHeroesController
myApp.controller('addHeroesController', ['$scope','$http',function($scope,$http){
  $scope.addHero = function(){
    console.log('in the click');
    var objectToSend = {
      alias:$scope.alias,
      first_name:$scope.first_name,
      last_name:$scope.last_name,
      city:$scope.city,
      power_name:$scope.power_name,
    };//objectToSend
    $scope.alias= '';
    $scope.first_name='';
    $scope.last_name='';
    $scope.city='';
    $scope.power_name='';
    $http({
      method:"POST",
      url:"/addHero",
      data:objectToSend
    }).then(function(response){
      console.log('came back from server',response);
    });
  };//addHero

}]);//addHeroesController
