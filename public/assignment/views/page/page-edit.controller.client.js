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
            PageService
                .findAllPagesForWebsite(vm.websiteId)
                .success(function (pages) {
                    vm.pages = pages;
                })
                .error (function(){
                    vm.error = "error";
                });

            PageService
                .findPageById(pageId)
                .success(function (page) {
                    vm.page = page;
                })
                .error (function(){
                    vm.error = "error";
                });
        }
        init();

        function updatePage(page) {
            if(page.name === undefined || !page.name){
                vm.error = "error";
            }
            else {
                PageService
                    .updatePage(pageId, page)
                    .success(function () {
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                    })
                    .error(function () {
                        vm.error = "error";
                    });
            }
        }

        function deletePage(pageId) {
                PageService
                    .deletePage(pageId)
                    .success(function () {
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                    })

                    .error(function () {
                        vm.error = "error";
                    });
            }
    }

})();
