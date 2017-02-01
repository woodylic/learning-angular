var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope) {

  $scope.userInfo = {
    email: "my@mail.com",
    password: "123456",
    autoLogon: true
  };

  $scope.getFormData = function() {
    console.log($scope.userInfo);
  };

  $scope.setFormData = function() {
    $scope.userInfo = {
      email: "another@mail.com",
      password: "abcdef",
      autoLogon: false
    }
  };

  $scope.resetFormData = function() {
    $scope.userInfo = {
      email: "my@mail.com",
      password: "123456",
      autoLogon: true
    }
  };

}]);
