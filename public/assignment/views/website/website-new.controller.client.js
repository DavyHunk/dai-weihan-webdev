(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location, $routeParams, WebsiteService) {
        var vm = this;
<<<<<<< HEAD
        vm.userId = parseInt($routeParams.uid);
        vm.createWebsite = createWebsite;

        function init() {
            WebsiteService
                .findWebsitesByUser(vm.userId)
                .success(function (websites) {
                    vm.websites = websites;
                })
                .error (function(){
                    vm.error = "error";
                });
        }
        init();


        function createWebsite(website) {
            WebsiteService
                .createWebsite(vm.userId, website)
                .success(function(){
                    $location.url("/user/"+vm.userId+"/website");
                })
                .error (function(){
                    vm.error = "error";
                });
=======
        vm.userId = $routeParams.uid;
        vm.createWebsite = createWebsite;

        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
        }
        init();

        function createWebsite(name, description) {
            WebsiteService.createWebsite(vm.userId, name, description);
            $location.url("/user/"+vm.userId+"/website");
>>>>>>> origin/master
        }
    }
})();