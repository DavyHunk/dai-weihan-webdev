(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);


    function WidgetNewController($routeParams, WidgetService, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        //var widget_Id = $routeParams.wgid;
        var widgetId = (new Date()).getTime();
        vm.createWidget = createWidget;

        function createWidget(type, widget) {
            var newWidget = {
                //_id: widgetId+"",
                type: type+"",
                pageId: vm.pageId+""
            };
            //console.log(newWidget);

            WidgetService
                .createWidget(vm.pageId, newWidget)
                .then(function(response){
                    var widgetNew = response.data;
                    //console.log(widgetNew);
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+
                        "/page/"+vm.pageId+"/widget/" + widgetNew._id);
                });
                // .then(
                //     function(response) {
                //         var newWidget = response.data;
                //         console.log("imageWidget");
                //         console.log(newWidget);
                //         if(newWidget.widgetType==="IMAGE")
                //         {
                //             console.log("New Image");
                //             console.log(vm.developerId);
                //             $location.url("/developer/"+vm.developerId+"/website/"+vm.websiteId+"/page/"+vm.page._id+"/widget/" + newWidget._id+"/image");
                //         }
                //         else {
                //             $location.url("/developer/" + vm.developerId + "/website/" + vm.websiteId + "/page/" + vm.page._id + "/widget/" + newWidget._id);
                //         }
                //     })
                // .error (function(){
                //     vm.error = "error";
                // })
        }

        // function init() {
        //     WidgetService
        //         .findWidgetById(widget_Id)
        //         .success(function (widget) {
        //             vm.widget = widget;
        //         })
        //         .error (function(){
        //             vm.error = "error";
        //         });
        //     //vm.widget = WidgetService.findWidgetById(widgetId);
        // }
        // init();


        // function selectWidget(type, widget) {
        //     WidgetService
        //         .findWidgetById(widget._id)
        //         .success(function (widget) {
        //             updateWidget(widget);
        //         })
        //         .error(function () {
        //             createWidget(type, widget);
        //         });
        //
        // }

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