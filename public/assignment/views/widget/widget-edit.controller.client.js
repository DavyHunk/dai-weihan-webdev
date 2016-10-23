(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);


    function WidgetEditController($sce, $routeParams, WidgetService, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        var widgetId = $routeParams.wgid;
        vm.deleteWidget = deleteWidget;
        vm.updateWidget = updateWidget;

        function init() {
            vm.widget = WidgetService.findWidgetById(widgetId);
        }
        init();

        function deleteWidget(){
            WidgetService.deleteWidget(widgetId);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                "/page/"+vm.pageId+"/widget");
        }

        function updateWidget(widget){
            WidgetService.updateWidget(widgetId, widget);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                "/page/"+vm.pageId+"/widget");
        }
    }



})();