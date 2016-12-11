(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
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
        if(website.name === undefined || !website.name){
            vm.error = "error";
            }
        else {
            WebsiteService
                .createWebsite(vm.userId, website)
                .success(function () {
                    $location.url("/user/" + vm.userId + "/website");
                })
                .error(function () {
                    vm.error = "error";
                });
        }
        }
    }
})();