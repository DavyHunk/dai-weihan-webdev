(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);


    function WidgetNewController($routeParams, WidgetService, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        var widgetId = (new Date()).getTime();
        vm.createWidget = createWidget;

        function createWidget(type, widget) {
                var newWidget = {
                    type: type + "",
                    pageId: vm.pageId + ""
                };

                WidgetService
                    .createWidget(vm.pageId, newWidget)
                    .then(function (response) {
                        var widgetNew = response.data;
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId +
                            "/page/" + vm.pageId + "/widget/" + widgetNew._id);
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