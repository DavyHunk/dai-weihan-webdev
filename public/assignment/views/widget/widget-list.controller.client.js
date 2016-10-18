//
// (function(){
//     angular
//         .module("WebAppMaker")
//         .controller("WidgetListController", WidgetListController)
//         .controller("NewWidgetController", NewWidgetController)
//         .controller("EditWidgetController", EditWidgetController)
//
//     function WidgetListController() {
//         var vm = this;
//     }
//
//     function NewWidgetController() {
//         var vm = this;
//     }
//
//     function EditWidgetController() {
//         var vm = this;
//     }
//     function EditWidgetController($routeParams, WidgetService) {
//         var vm = this;
//         var vm.widgetId = $routeParams["widgetId"];
//         function init() {
//             vm.user = WidgetService.findWidgetById(vm.widgetId);
//         }
//         init();
//     }
//
// })();

(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($sce, $routeParams, WidgetService) {
        var vm = this;
        var pageId = $routeParams.pageId;
        vm.getSafeHtml = getSafeHtml;
        vm.getSafeUrl = getSafeUrl;

        function init() {
            vm.widgets = WidgetService.findWidgetsForPageId(pageId);
            $(".container")
                .sortable({axis: "y"});
        }
        init();

        function getSafeHtml(widget) {
            return $sce.trustAsHtml(widget.text);
        }

        function getSafeUrl(widget) {
            var urlParts = widget.url.split("/");
            var id = urlParts[urlParts.length - 1];
            var url = "https://www.youtube.com/embed/" + id;
            return $sce.trustAsResourceUrl(url);
        }
    }
})();