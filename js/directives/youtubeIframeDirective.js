app.directive('youtubeIframe', [
    '$sce',
    function($sce) {
        return {
            restrict: 'E',
            scope:{
                url:'@'
            },
            template: '<div><iframe width="560" height="315" src="{{videoUrl}}" frameborder="0" allowfullscreen></iframe></div>',
            link: function(sc) {
                sc.$watch('url',function(){
                    if(sc.url !== ""){
                        sc.videoUrl =  $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + sc.url + '?autoplay=1');
                    }
                })

            }
        };
    }
]);
