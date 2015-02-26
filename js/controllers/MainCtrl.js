app.controller('MainCtrl', ['$scope','$timeout','$sce','youtubeService', function($scope, $timeout, $sce, youtubeService) {
    
    $scope.videoList = function(query) {
            youtubeService.getSearchList(query).then(function (data) {
                $scope.list = data;
                $scope.activeVideo = data[0].id.videoId;
                $scope.getVideoUrl($scope.activeVideo);
            }, function(error) {
                console.log(error);
            });
    };
    
    $scope.videoList();
    
    $scope.getVideoUrl = function(videoId) {
        $scope.videoUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId + '?autoplay=1');
    };

}]);