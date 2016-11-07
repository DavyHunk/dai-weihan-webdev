<<<<<<< HEAD
(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {
        var api = {
            createWidget: createWidget,
            findAllWidgetsForPage: findAllWidgetsForPage,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            sortWidget:sortWidget
        };
        return api;


        function sortWidget(pageId, start, end){
            var url = "/api/page/"+pageId+"/widget?initial="+start+"&final="+end;
            return $http.put(url);
        }


        function createWidget(pageId, widget) {
            var url = "/api/page/"+pageId+"/widget";
            return $http.post(url, widget);
        }



        function findAllWidgetsForPage(pageId) {
            var url = "/api/page/"+pageId+"/widget";
            return $http.get(url);
        }


        function findWidgetById(widgetId) {
            var url = "/api/widget/"+widgetId;
            return $http.get(url);
        }


        function updateWidget(widgetId, widget) {
            var url = "/api/widget/"+widgetId;
            return $http.put(url, widget);
        }


        function deleteWidget(widgetId) {
            var url = "/api/widget/"+widgetId;
            return $http.delete(url);
        }


    }
=======
(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    var widgets = [
        { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "https://s-media-cache-ak0.pinimg.com/564x/8f/17/e1/8f17e19c5d4c3531bb7ae3f6b0e85955.jpg"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>html ipsum</p>"},
        { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321",
            "text": '<p>Presidential candidate Donald Trump has a penchant for lawsuits, much like <a href="https://gawker.com/gawker-was-murdered-by-gaslight-1785456581" target="_blank" rel="noopener">another Republican convention speaker</a>. Today Trump gave a speech in Gettysburg, where he said he is fighting “the power structure,” and that his administration would not approve of AT&amp;T trying to buy Time Warner “and thus, CNN.”<span class="read-more-placeholder"></span><span class="readmore-core-decorated"></span></p>'}
            ];

    function WidgetService($http) {
        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            createWidgetHeader:createWidgetHeader,
            createWidgetImage:createWidgetImage,
            createWidgetYouTube:createWidgetYouTube
        };
        return api;


        function createWidget(pageId, widget) {
            var newWidget = {
                _id: (new Date()).getTime()+"",
                pageId: pageId,
            };
            widgets.push(newWidget);
            return newWidget;
        }



        function findWidgetsByPageId(pageId) {
            var result = [];
            for(var i in widgets) {
                if(widgets[i].pageId === pageId) {
                    result.push(widgets[i]);
                }
            }
            return result;
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
                pageId: widget.pageId,
                text: widget.text,
                size: widget.size,
                url: widget.url,
                width: widget.width
            };
            for(var i in widgets) {
                if(widgets[i]._id === widgetId) {
                    widgets[i] = newWidget;
                    return true;
                }
            }
            return true;
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

        function createWidgetHeader(widget) {
            var newWidget = {
                _id: widget._id,
                widgetType: "HEADER",
                pageId: widget.pageId,
                text: widget.text,
                size: widget.size
            };
            for(var i in widgets) {
                if(widgets[i]._id === widget._id) {
                    widgets[i]= newWidget;
                    return newWidget;
                }
            }
        }

        function createWidgetImage(widget) {
            var newWidget = {
                _id: widget._id,
                widgetType: "IMAGE",
                pageId: widget.pageId,
                width: widget.width,
                url: widget.url
            };
            for(var i in widgets) {
                if(widgets[i]._id === widget._id) {
                    widgets[i]= newWidget;
                    return newWidget;
                }
            }
        }

        function createWidgetYouTube(widget) {
            var newWidget = {
                _id: widget._id,
                widgetType: "YOUTUBE",
                pageId: widget.pageId,
                width: widget.width,
                url: widget.url
            };
            for(var i in widgets) {
                if(widgets[i]._id === widget._id) {
                    widgets[i]= newWidget;
                    return newWidget;
                }
            }
        }
    }
>>>>>>> origin/master
})();