module.exports = function () {
    var mongoose = require("mongoose");
    var WidgetSchema = require("../widget/widget.schema.server")();

    var PageSchema = mongoose.Schema({
        _website: {type: mongoose.Schema.ObjectId, ref: "Website"},
        name: String,
        title: String,
        description: String,
        dateCreated: {type: Date, default: Date.now},
        widgets: [{type: mongoose.Schema.Types.ObjectId, ref: "Widget"}]
        //widgets: [WidgetSchema]
    }, {collection: "page"});

    return PageSchema;
};