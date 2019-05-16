const app = angular.module('CalorieApp', []);

app.controller('MainController', ['$http', function($http){
  let allMeals = [];

  this.getMeals = function(){
    $http({
      method: 'GET',
      url: '/meals'
    }).then(response=>{
      console.log(response.data);
      this.mealsInfo = response.data;
    }).catch(error=>{
      console.log(error);
    });
  };

  this.createMeal = function(){
    $http({
      method: 'POST',
      url: '/meals',
      data: {
        name: this.name,
        calories: this.calories
      }
    }).then(response=>{
      allMeals.push(response.data);
      this.getMeals();
    }).catch(error=>{
      console.log(error);
    });
  };

  this.deleteMeal = function(meal){
    $http({
      method: 'DELETE',
      url: '/meals/' + meal._id
    }).then(response=>{
      this.getMeals();
    }).catch(error=>{
      console.log(error);
    });
  };

  this.getMeals();

}]);
