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

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.websiteId = $routeParams["websiteId"];
        function init() {
            vm.pages = PageService.findPageByWebsiteId(websiteId);
        }
        init();
    }
})();