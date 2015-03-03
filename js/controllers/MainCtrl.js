app.controller('MainCtrl', ['$scope','$timeout','$sce', '$cookieStore','youtubeService', function($scope, $timeout, $sce, $cookieStore, youtubeService) {
    
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

    
    $scope.favorites = $cookieStore.get('favorites');
    
    $scope.addToFavorite = function(video) {
        
        if(!$scope.favorites)
        {
            $scope.favorites = [];
        }
        
        $scope.favorites.push(video); 
        $cookieStore.put('favorites',$scope.favorites);
        $scope.favorites = $cookieStore.get('favorites');
    };
    
    $scope.removeFromFavorite = function(favorite) {
        var index = $scope.favorites.indexOf(favorite);
        if(index > -1) {
            $scope.favorites.splice(index, 1);
            $cookieStore.put('favorites',$scope.favorites);
        }
    };
        
}]);