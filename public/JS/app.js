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
      description : "Good hands on experience",
      image : "images/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f6a732e706e67.png"
    },
    {
      skill : "HTML-5",
      description : "Good hands on experience",
      image : "images/HTML5_Logo_512.png"
    },
    {
      skill : "CSS-3",
      description : "Good hands on experience",
      image : "images/preview-css3logo.png"
    },
    {
      skill : "Angular JS",
      description : "Good hands on experience",
      image : "images/angularJS.png"
    },
    {
      skill : "JQuery",
      description : "Good hands on experience",
      image : "images/angularJS.png"
    },
    {
      skill : "Node JS",
      description : "Good hands on experience",
      image : "images/angularJS.png"
    },
    {
      skill : "Express JS",
      description : "Good hands on experience",
      image : "images/angularJS.png"
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
      link : "/images/teja.docx"
    },
    {
      title : "My Work",
      link : ""
    },
    {
      title : "Home",
      link : "home"
    },

  ];
});