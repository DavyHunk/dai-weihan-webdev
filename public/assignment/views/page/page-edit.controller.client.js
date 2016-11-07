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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
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
<<<<<<< HEAD
        }
        init();

=======
=======
            vm.page = PageService.findPageById(pageId);
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
        }
        init();

        function updatePage(pageId, page) {
            PageService.updatePage(pageId, page);
            $location.url("/user/" + vm.userId+"/website/" + vm.websiteId + "/page");
>>>>>>> origin/master
        }
        init();

<<<<<<< HEAD
>>>>>>> origin/master
        function updatePage(page) {
            PageService
                .updatePage(pageId, page)
                .success(function(){
                    $location.url("/user/" + vm.userId+"/website/" + vm.websiteId + "/page");
                })
                .error (function(){
                    vm.error = "error";
                });
        }

        function deletePage(pageId) {
            PageService
                .deletePage(pageId)
                .success(function(){
                    $location.url("/user/" + vm.userId+"/website/" + vm.websiteId + "/page");
                })

                .error (function(){
                    vm.error = "error";
                });
            }
<<<<<<< HEAD
=======
=======
        function deletePage() {
            PageService.deletePage(pageId);
            $location.url("/user/" + vm.userId+"/website/" + vm.websiteId + "/page");
        }
>>>>>>> origin/master
>>>>>>> origin/master
    }

})();
