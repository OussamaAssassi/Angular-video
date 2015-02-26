app.controller('MainCtrl', ['$scope','youtubeService', function($scope, youtubeService) {
    
    $scope.activeVideo = "";
    
    $scope.videoList = function(query) {

            youtubeService.getSearchList(query).then(function (data) {
                $scope.list = data;
                $scope.activeVideo = data[0].id.videoId;

                console.log($scope.activeVideo);
            }, function(error) {
                console.log(error);
            });
    }
    
    $scope.videoList();

}]);