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
            PageService
                .findAllPagesForWebsite(vm.websiteId)
                .success(function (pages) {
                    vm.pages = pages;
                })
                .error (function(){
                    vm.error = "error";
                });
        }
        init();


        function createPage(page){
            if(page.name === undefined || !page.name){
                vm.error = "error";
            }
            else {
                PageService
                    .createPage(vm.websiteId, page)
                    .success(function () {
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                    })
                    .error(function () {
                        vm.error = "error";
                    });
            }
        }
    }

})();
