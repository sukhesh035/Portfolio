var app= angular.module("portfolio",['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'

  })
  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html'

  });

}]);

app.controller("MainContriller",function($scope){
  $scope.message = "Hi angular worked";
});


app.controller("aboutController",function($scope){
  $scope.skills = [
    {
      skill : "Javascript",
      description : "HI",
      image : ""
    },
    {
      skill : "HTML-5",
      description : "HI",
      image : ""
    },
    {
      skill : "CSS-3",
      description : "HI",
      image : ""
    },
    {
      skill : "Angular JS",
      description : "HI",
      image : ""
    }
    
  ];
});

app.controller("headerController",function($scope){
  $scope.headerlist = [
    {
      title : "About Me",
      link : "about"
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
      title : "My Home",
      link : "home"
    },



  ];
});