(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    var widgets = [
        { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];

    function WidgetService($http) {
        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };
        return api;


        function createWidget(pageId, widget) { //???
            var newWidget = {
                _id: widget._id,
                widgetType: widget.widgetType,
                pageId: pageId
            };
            widgets.push(newWidget);
            return newWidget;
        }



        function findWidgetsByPageId(pageId) {   //???
            for(var i in widgets) {
                if(widgets[i].pageId === pageId) {
                    return widgets[i];
                }
            }
            return null;
        }


        function findWidgetById(widgetId) {
            for(var i in widgets) {
                if(widgets[i]._id === widgetId) {
                    return widgets[i];
                }
            }
            return null;
        }


        function updateWidget(widgetId, widget) {
            var newWidget = {
                _id: widgetId,
                widgetType: widget.widgetType,
                pageId: widget.pageId
            };
            for(var i in widgets) {
                if(widgets[i]._id === widgetId) {
                    widgets[i] = newWidget;
                    return true;
                }
            }
            return false;
        }


        function deleteWidget(widgetId) {
            for(var i in widgets) {
                if(widgets[i]._id === widgetId) {
                    widgets.splice(i, 1);
                    return true;
                }
            }
            return false;
        }


    }
})();