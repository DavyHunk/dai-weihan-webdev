(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, PageService, $location) {
        var vm = this;
        vm.websiteId = $routeParams.wid;
        vm.userId = $routeParams.uid;
        var pageId = $routeParams.pid;
        vm.createPage = createPage;

        function init() {
            vm.page = PageService.findPageById(pageId);
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
        }
        init();

        function createPage(page){
            PageService.createPage(vm.websiteId, page);
            $location.url("/user/" + vm.userId+"/website/" + vm.websiteId + "/page");

        }
    }

})();
