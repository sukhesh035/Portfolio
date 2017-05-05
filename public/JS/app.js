var app= angular.module("portfolio",['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'

  });

}]);

app.controller("MainContriller",function($scope){
  $scope.message = "Hi angular worked";
});

app.controller("headerController",function($scope){
  $scope.headerlist = [
    {
      title : "About Me",
      link : ""
    },
    {
      title : "Resume",
      link : ""
    },
    {
      title : "My Work",
      link : ""
    },
    {
      title : "Home",
      link : ""
    },



  ];
});