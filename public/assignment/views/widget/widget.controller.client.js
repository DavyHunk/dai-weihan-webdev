
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("NewWidgetController", NewWidgetController)
        .controller("EditWidgetController", EditWidgetController)

    function WidgetListController() {
        var vm = this;
    }

    function NewWidgetController() {
        var vm = this;
    }

    function EditWidgetController() {
        var vm = this;
    }
    function EditWidgetController($routeParams, WidgetService) {
        var vm = this;
        vm.widgetId = $routeParams["widgetId"];
        function init() {
            vm.user = WidgetService.findWidgetById(vm.widgetId);
        }
        init();
    }

})();