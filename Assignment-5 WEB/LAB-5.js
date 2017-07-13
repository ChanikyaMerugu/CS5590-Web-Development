
var myApp = angular.module("myApp", [])
    .controller("SearchController",
        function($http, $scope) {
            $scope.search = function(texttosearch) {
                $http.get('https://www.googleapis.com/youtube/v3/search',
                    {
                        params: {
                            key: " AIzaSyCYAzU-NnXLp5TqICtaRGxP5uunL7KJ8hs",
                            type: 'video',
                            part: 'id,snippet',
                            q: texttosearch
                        }
                    }).success(function(response) {
                    //    $scope.youtubeSearchText = texttosearch;
                    //$scope.youtubeData = data.items;
                    //$scope.nextPageToken = data.nextPageToken;
                    //$scope.prevPageToken = data.prevPageToken;
                    $scope.data = response.items;
                    console.log(data);

                });
            };
        });