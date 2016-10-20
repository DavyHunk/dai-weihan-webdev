(function(){
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

    function EditPageController($routeParams, PageService) {
        var vm = this;

        vm.pageId = $routeParams.pageId;
        vm.websiteId = $routeParams.websiteId;
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function updatePage(page) {
            PageService.updateWebsite(vm.pageId, page);
        }

        function deletePage() {
            PageService.deleteWebsite(vm.pageId);
        }

        function init() {
            vm.user = PageService.findPageById(vm.pageId);
        }
        init();
    }

})();
