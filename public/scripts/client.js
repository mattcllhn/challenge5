console.log('js sourced');
var myApp = angular.module('myApp',[]);

myApp.controller('viewHeroesController', '$scope','$http',function($scope, $http){
  console.log('viewHeroesController');
});//viewHeroesController
