(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService, $location) {
        var vm = this;
        vm.websiteId = $routeParams.wid;
        vm.userId = $routeParams.uid;
        var pageId = $routeParams.pid;
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init() {
            vm.page = PageService.findPageById(pageId);
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
        }
        init();

        function updatePage(pageId, page) {
            PageService.updatePage(pageId, page);
            $location.url("/user/" + vm.userId+"/website/" + vm.websiteId + "/page");
        }

        function deletePage() {
            PageService.deletePage(pageId);
            $location.url("/user/" + vm.userId+"/website/" + vm.websiteId + "/page");
        }
    }

})();
