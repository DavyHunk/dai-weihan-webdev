//
// (function(){
//     angular
//         .module("WebAppMaker")
//         .controller("PageListController", PageListController)
//         .controller("NewPageController", NewPageController)
//         .controller("EditPageController", EditPageController)
//
//     function PageListController() {
//         var vm = this;
//     }
//
//     function NewPageController() {
//         var vm = this;
//     }
//
//     function EditPageController() {
//         var vm = this;
//     }
//     function EditPageController($routeParams, PageService) {
//         var vm = this;
//         var vm.pageId = $routeParams["pageId"];
//         function init() {
//             vm.user = PageService.findPageById(vm.pageId);
//         }
//         init();
//     }
//
// })();

(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        vm.createNewPage = createNewPage;

        function init() {
            PageService
                .findPagesForWebsite(vm.websiteId)
                .then(
                    function(response) {
                        vm.pages = response.data;
                    }
                );
        }
        init();

        function createNewPage() {
            var page = {
                name: "New Page " + (new Date()).getTime(),
                title: "New Page " + (new Date()).getTime(),
            };
            PageService
                .createPage(vm.websiteId, page)
                .then(
                    function(response) {
                        vm.pages = response.data;
                    }
                )
        }
    }
})();