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

<<<<<<< HEAD



        function init() {
            WebsiteService
                .findWebsitesByUser(vm.userId)
                .success(function (websites) {
                    vm.websites = websites;
                })
                .error (function(){
                    vm.error = "error";
                });

            WebsiteService
                .findWebsiteById(websiteId)
                .success(function (website) {
                    vm.website = website;
                })
                .error (function(){
                    vm.error = "error";
                });

            //vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
            //vm.website = WebsiteService.findWebsiteById(vm.userId, websiteId);
        }
        init();



        function updateWebsite(website) {
            WebsiteService
                .updateWebsite(websiteId, website)
                .success(function(){
                    $location.url("/user/"+vm.userId+"/website");
                })
                .error (function(){
                    vm.error = "error";
                });
            // WebsiteService.updateWebsite(websiteId, website);
            // $location.url("/user/"+vm.userId+"/website");
        }

        function deleteWebsite(websiteId) {
            WebsiteService
                .deleteWebsite(websiteId)
                .success(function(){
                    $location.url("/user/"+vm.userId+"/website");
                })
                .error (function(){
                    vm.error = "error";
                });
            // WebsiteService.deleteWebsite(websiteId);
            // $location.url("/user/"+vm.userId+"/website");
=======
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
>>>>>>> origin/master
        }
    }
})();