(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);


    function WidgetNewController($sce, $routeParams, WidgetService, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        var widgetId = (new Date()).getTime()+"";
        vm.createWidgetHeader = createWidgetHeader;
        vm.createWidgetImage = createWidgetImage;
        vm.createWidgetYouTube = createWidgetYouTube;

        function init() {
            vm.widget = WidgetService.createWidget(vm.pageId, vm.widget);
        }
        init();

        function createWidgetHeader(widget){
            vm.widget = WidgetService.createWidgetHeader(vm.widget);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                "/page/"+vm.pageId+"/widget/"+vm.widget._id);
        }

        function createWidgetImage(widget){
            vm.widget = WidgetService.createWidgetImage(vm.widget);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                "/page/"+vm.pageId+"/widget/"+vm.widget._id);
        }
        function createWidgetYouTube(widget){
            vm.widget = WidgetService.createWidgetYouTube(vm.widget);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                "/page/"+vm.pageId+"/widget/"+vm.widget._id);
        }


    }
})();