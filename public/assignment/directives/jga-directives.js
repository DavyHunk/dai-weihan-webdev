(function () {
    angular
        .module("wamDirectives", [])
        .directive("wamSortable", wamSortable);
    //wam-sortable

    function wamSortable($routeParams) {

            // function link(scope, element, attrs) {
            //     var start = null;
            //     var end   = null;
            //     $(element)
            //         .sortable({
            //             sort: function(event, ui) {
            //                 //ui.helper.find("a").hide();
            //                 start = ui.item.index();
            //             },
            //             stop: function(event, ui) {
            //                 //ui.item.find("a").show();
            //                 end = ui.item.index();
            //                 if(start >= end) {
            //                     start--;
            //                 }
            //                 scope.wamSortableCallback({start: start, end: end});
            //             }
            //         });
            // }
            // return {
            //     scope: {
            //         wamSortableCallback: '&'
            //     },
            //     link: link
            // };






        function linker(scope, element) {
            var start = -1;
            var end = -1;

            element.sortable({
                    axis:'y',
                start:function (event, ui) {
                    start = $(ui.item).index();
                },
                stop:function (event, ui) {
                    end = $(ui.item).index();
                    scope.wamSortableController.sortWidget(start, end);
                }
                });
        }

        return {
            scope:{},
            link: linker,
            controller:wamSortableController,
            controllerAs:'wamSortableController'
        };

        function wamSortableController(WidgetService) {
            var vm = this;
            vm.sortWidget = sortWidget;
            var pageId = $routeParams.pid;

            function sortWidget(start, end) {
                WidgetService.sortWidget(pageId, start, end);
            }
        }
    }
})();