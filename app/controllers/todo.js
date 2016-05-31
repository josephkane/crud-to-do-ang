'use strict';

app.controller("ToDoCtrl", function($scope) {

	$scope.title = 'Angular Todo!';
	$scope.potato = '';
	$scope.check = '';

	$scope.newToDo = '';

  $scope.tasks = [
    { name: "Make the bed", type: "home"},
    { name: "Eat breakfast", type: "home"},
    { name: "Check the network", type: "work"},
    { name: "Start up Slack", type: "work"},
    { name: "Feed the cats", type: "home"}
  ]

  $scope.addToDo = function () {
  	$scope.tasks.push({ name: $scope.newToDo, type: "home"});
  	$scope.newToDo = '';
  }

  $scope.removeToDo = (task) => {
  	const taskIndex = $scope.tasks.indexOf(task);
  	$scope.tasks.splice(taskIndex, 1);
  }

})