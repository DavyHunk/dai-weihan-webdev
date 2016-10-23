(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
            vm.website = WebsiteService.findWebsiteById(websiteId);
        }
        init();

        function updateWebsite(website) {
            WebsiteService.updateWebsite(websiteId, website);
            $location.url("/user/"+vm.userId+"/website");
        }

        function deleteWebsite(websiteId) {
            WebsiteService.deleteWebsite(websiteId);
            $location.url("/user/"+vm.userId+"/website");
        }
    }
})();