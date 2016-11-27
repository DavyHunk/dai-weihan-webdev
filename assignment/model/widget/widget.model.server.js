module.exports = function() {


    var mongoose = require("mongoose");
    var WidgetSchema = require("./widget.schema.server")();
    var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

    var api = {
        createWidget: createWidget,
        findAllWidgetsForPage: findAllWidgetsForPage,
        findWidgetById: findWidgetById,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget,
        reorderWidget: reorderWidget
    };
    return api;

    function findWidgetById(widgetId) {
        return WidgetModel.findById(widgetId);
    }

    function findAllWidgetsForPage(pageId) {
        return WidgetModel.find({_page: pageId});
    }


    function reorderWidget(pageId, start, end) {
        var startIndex = parseInt(start);
        var endIndex = parseInt(end);

        return WidgetModel
            .find()
            .then(
                function (widgets) {
                    console.log(endIndex);
                    widgets
                        .forEach(
                            function (widget) {
                                if (startIndex < endIndex) {
                                    if (widget.order < startIndex) {

                                    } else if (widget.order == startIndex) {
                                        widget.order = endIndex;
                                        widget.save(function (err, doc) {
                                        });
                                    } else if (widget.order > startIndex && widget.order <= endIndex) {
                                        widget.order--;
                                        widget.save(function (err, doc) {
                                        });
                                    } else if (widget.order > endIndex) {

                                    }
                                } else {
                                    if (widget.order < endIndex) {

                                    } else if (widget.order == startIndex) {
                                        widget.order = endIndex;
                                        widget.save(function (err, doc) {
                                        });
                                    } else if (widget.order < startIndex && widget.order >= endIndex) {
                                        widget.order++;
                                        widget.save(function (err, doc) {
                                        });
                                    } else if (widget.order > startIndex) {

                                    }
                                }
                            }
                        );
                },
                function (err) {

                }
            );
    }

    function deleteWidget(widgetId) {
        return WidgetModel.remove({_id: widgetId});
    }

    function updateWidget(widgetId, newWidget) {
        delete newWidget._id;
        return WidgetModel
            .findById(widgetId)
            .then(
                function (widget) {
                    widget.name = newWidget.name;
                    if (widget.type === "HEADING") {
                        if (newWidget.text) {
                            widget.text = newWidget.text;
                            widget.size = newWidget.size;
                        }
                    } else if (widget.type === "HTML") {
                        if (newWidget.text) {
                            widget.text = newWidget.text;
                        }
                    } else if (widget.type === "IMAGE") {
                        if (newWidget.url) {
                            widget.url = newWidget.url;
                            widget.width = newWidget.width;
                        }
                    } else if (widget.type === "YOUTUBE") {
                        if (newWidget.url) {
                            widget.url = newWidget.url;
                            widget.width = newWidget.width;
                        }
                    } else if (widget.type === "TEXT") {
                        widget.text = newWidget.text;
                        widget.placeholder = newWidget.placeholder;
                        widget.rows = newWidget.rows;
                        widget.formatted = newWidget.formatted;
                    }
                    return widget.save();
                }
            );
    }

    function createWidget(pageId, widget) {
         return WidgetModel
            .findOne({_page: pageId})
            .sort('-order')
            .then(
                function(lastWidget) {
                    widget._page = pageId;
                    if(lastWidget) {
                        widget.order = ++lastWidget.order;
                    }
                     return WidgetModel.create(widget);
                },
                function(error) {
                    console.log(error);
                }
            );
    }


    };