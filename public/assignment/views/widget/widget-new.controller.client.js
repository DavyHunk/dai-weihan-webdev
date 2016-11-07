(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);


    function WidgetNewController($routeParams, WidgetService, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        var widget_Id = $routeParams.wgid;
        var widgetId = (new Date()).getTime();
        vm.createWidget = createWidget;

        function createWidget(type, widget) {
            var newWidget = {
                _id: widgetId+"",
                widgetType: type+"",
                pageId: vm.pageId+""
            };

            WidgetService
                .createWidget(vm.pageId, newWidget)
                .success(function(){
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                        "/page/"+vm.pageId+"/widget/"+widgetId);
                })
                .error (function(){
                    vm.error = "error";
                });
        }

        function init() {
            WidgetService
                .findWidgetById(widget_Id)
                .success(function (widget) {
                    vm.widget = widget;
                })
                .error (function(){
                    vm.error = "error";
                });
            //vm.widget = WidgetService.findWidgetById(widgetId);
        }
        init();


        function selectWidget(type, widget) {
            WidgetService
                .findWidgetById(widget._id)
                .success(function (widget) {
                    updateWidget(widget);
                })
                .error(function () {
                    createWidget(type, widget);
                });

        }

        function updateWidget(widget){
            WidgetService
                .updateWidget(widgetId, widget)
                .success(function(){
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                        "/page/"+vm.pageId+"/widget");
                })
                .error(function(){

                });
        }




    }
})();