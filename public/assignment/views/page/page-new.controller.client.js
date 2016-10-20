(function(){
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);

    function NewPageController($routeParams, PageService) {
        var vm = this;
        vm.pageId = $routeParams.pageId;
        vm.websiteId = $routeParams.websiteId;
        vm.createPage = createPage;

        function createPage(name, description){
            PageService.createPage(vm.name, description);
        }
    }

})();
