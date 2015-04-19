angular
	.module('ToDo', [])
	.controller('todoCtrl', todoCtrl) 

	function todoCtrl($scope) {
		$scope.app = "Tarefas"
		$scope.tasks = [
			{task: "Correr", objective: "Correr até a praia"},
			{task: "Nadar", objective: "Nada na praia"}
		];
		
		$scope.addTask = function (task) {
			$scope.tasks.push(angular.copy(task));
			delete $scope.task;
		};
};
