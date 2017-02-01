var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HomeCtrl', function($scope){
  $scope.greeting = { text: 'Hello' };
});

bookStoreCtrls.controller('BookListCtrl', ['$scope',
  function($scope) {    
    $scope.books = [{
      title: "《Ext江湖》",
      author: "大漠穷秋"
    }, {
      title: "《Thinking in Java》",
      author: "不知道"
    }, {
      title: "《C#高级编程》",
      author: "也不知道"
    }];
}]);