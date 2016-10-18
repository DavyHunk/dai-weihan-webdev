
(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("EditWebsiteController", EditWebsiteController)

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        var vm.userId = $routeParams["userId"];
        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(userId);
        }
        init();
    }

    function NewWebsiteController() {
        var vm = this;
    }


    function EditWebsiteController($routeParams, WebService) {
        var vm = this;
        var vm.webId = $routeParams["webId"];
        function init() {
            vm.user = WebService.findWebsiteById(vm.webId);
        }
        init();
    }
})();