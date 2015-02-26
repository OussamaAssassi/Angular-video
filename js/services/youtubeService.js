app.service('youtubeService', ['$http', '$q', function($http, $q) {
    
    var getSearchList = function(query){
        
        var defered = $q.defer();
        
        $http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDBzUEkRZSSRB8AdLJSgMq5OFzkmZS5ISk&part=snippet&type=video&q='+query)
            .success(function(data){
                defered.resolve(data.items);
            })
            .error(function(status){
                defered.reject('error' + status);
            });
        
            return defered.promise;
    };
    
    return {
        getSearchList: getSearchList
    };
    
}]);