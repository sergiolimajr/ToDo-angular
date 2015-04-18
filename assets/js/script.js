angular
	.module('ToDo', [])
	.controller('todoCtrl', todoCtrl) 

	function todoCtrl($scope) {
		$scope.app = "Tasks"
		$scope.tasks = [
			{task: "Run", objective: "Running to the beach"},
			{task: "Swim", objective: "Swim in the beach"}
		];
		
		$scope.addTask = function (task) {
			$scope.tasks.push(angular.copy(task));
			delete $scope.task;
		};
};