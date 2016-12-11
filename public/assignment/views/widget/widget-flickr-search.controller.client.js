(function () {
    angular
        .module("WebAppMaker")
        .controller("FlickrSearchController", FlickrSearchController);
    function FlickrSearchController($http, $location, $routeParams, FlickrService, WidgetService) {
        var vm = this;
        vm.selectPhoto = selectPhoto;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        var widgetId = $routeParams.wgid;


        vm.searchPhotos = function(searchTerm) {
            FlickrService
                .searchPhotos(searchTerm)
                .then(function(response) {
                    data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    vm.photos = data.photos;
                });
        };


        function selectPhoto(photo) {
            var url = "https://farm";
            url += photo.farm;
            url += ".staticflickr.com/";
            url += photo.server;
            url += "/";
            url += photo.id;
            url += "_";
            url += photo.secret;
            url += "_b.jpg";
            WidgetService
                .updateWidget(widgetId, {url: url})
                .then(
                    function(response){
                        var url = "/user/"+vm.userId+"/website/"+ vm.websiteId+"/page/"+vm.pageId+"/widget/"+ widgetId;
                        $location.url(url);
                    },
                    function(error){
                        console.log(error);
                    }
                );
        }


    }
})();