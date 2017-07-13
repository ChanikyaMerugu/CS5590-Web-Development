var myApp = angular.module("myApp", [])
    .controller("SearchController",
        function ($http, $scope) {
            $scope.search = function (texttosearch) {
                $http.get('api.openweathermap.org/data/2.5/forecast/daily?id=524901',
                    {
                        params: {
                            appid: 'bd82977b86bf27fb59a04b61b657fb6f',
                            q: texttosearch
                        }
                    }).success(function (data) {
                    //    $scope.youtubeSearchText = texttosearch;
                    //$scope.youtubeData = data.items;
                    //$scope.nextPageToken = data.nextPageToken;
                    //$scope.prevPageToken = data.prevPageToken;
                    $scope.data = data;
                    console.log(data);

                });
            };
        });