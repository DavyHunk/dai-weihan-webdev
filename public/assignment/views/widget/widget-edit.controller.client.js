<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);


    function WidgetEditController($routeParams, WidgetService, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        var widgetId = $routeParams.wgid;
        vm.deleteWidget = deleteWidget;
        vm.updateWidget = updateWidget;



        function init() {
            WidgetService
                .findWidgetById(widgetId)
                .success(function (widget) {
                    vm.widget = widget;
                })
                .error (function(){
                    vm.error = "error";
                });
            //vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
            //vm.website = WebsiteService.findWebsiteById(vm.userId, websiteId);
<<<<<<< HEAD
        }
        init();


        function deleteWidget(){
            WidgetService
                .deleteWidget(widgetId)
                .success(function(){
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                        "/page/"+vm.pageId+"/widget");
                })
                .error (function(){
                    vm.error = "error";
                });
            // WidgetService.deleteWidget(widgetId);
            // $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
            //     "/page/"+vm.pageId+"/widget");
        }

        function updateWidget(widget){
            WidgetService
                .updateWidget(widgetId, widget)
                .success(function(){
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                        "/page/"+vm.pageId+"/widget");
                })
                .error (function(){
                    vm.error = "error";
                });
            // WidgetService.updateWidget(widgetId, widget);
            // $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
            //     "/page/"+vm.pageId+"/widget");
=======
        }
        init();


        function deleteWidget(){
            WidgetService
                .deleteWidget(widgetId)
                .success(function(){
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                        "/page/"+vm.pageId+"/widget");
                })
                .error (function(){
                    vm.error = "error";
                });
            // WidgetService.deleteWidget(widgetId);
            // $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
            //     "/page/"+vm.pageId+"/widget");
        }

        function updateWidget(widget){
            WidgetService
                .updateWidget(widgetId, widget)
                .success(function(){
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                        "/page/"+vm.pageId+"/widget");
                })
                .error (function(){
                    vm.error = "error";
                });
            // WidgetService.updateWidget(widgetId, widget);
            // $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
            //     "/page/"+vm.pageId+"/widget");
        }
    }



=======
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
>>>>>>> origin/master
        }
    }



<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> origin/master
})();