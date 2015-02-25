app.controller('MainCtrl', ['$scope','youtubeService', function($scope,youtubeService) {

    var videoList = function() {
        youtubeService.getSearchList().then(function (data) {
            $scope.list = data;
        }, function(error) {
            console.log(error);
        });
    }
    
    videoList();

}]);