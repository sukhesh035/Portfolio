var app= angular.module("portfolio",[]);

app.controller("MainContriller",function($scope){
  $scope.message = "Hi angular worked";
});

app.controller("headerController",function($scope){
  $scope.headerlist = [
    {
      title : "Home",
      link : ""
    },
    {
      title : "My Work",
      link : ""
    },
    {
      title : "Resume",
      link : ""
    },
    {
      title : "About Me",
      link : ""
    }
  ];
});