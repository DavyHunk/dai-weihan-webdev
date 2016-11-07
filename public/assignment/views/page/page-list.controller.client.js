(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master

        function init() {
            PageService
                .findAllPagesForWebsite(vm.websiteId)
                .success(function (pages) {
                    vm.pages = pages;
                }
                )

                .error (function(){
                    vm.error = "error";
                });
<<<<<<< HEAD
=======
=======
        var pageId = $routeParams.pid;

        function init() {
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
            vm.page =PageService.findPageById(pageId);
>>>>>>> origin/master
>>>>>>> origin/master
        }
        init();
    }
})();