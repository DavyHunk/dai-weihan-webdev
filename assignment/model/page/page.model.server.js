module.exports = function () {
    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server")();
    var PageModel = mongoose.model("PageModel", PageSchema);


    var api = {
        createPage: createPage,
        findAllPagesForWebsite: findAllPagesForWebsite,
        findPageById: findPageById,
        updatePage: updatePage,
        deletePage: deletePage

    };
    return api;


    function createPage(websiteId, page) {
        page._website = websiteId;
        return PageModel.create(page);
    }

    function findAllPagesForWebsite(websiteId) {
        return PageModel.find({"_website": websiteId});
    }

    function updatePage(pageId, page) {
        delete page._id;
        return PageModel
            .update({_id: pageId},{
                $set: {
                    name: page.name,
                    title: page.title
                }
            });
    }

    function deletePage(pageId) {
        return PageModel.remove({_id: pageId});
    }

    function findPageById(pageId) {
        return PageModel.findById(pageId);
        //return UserModel.find({_id: userId}); //returns an array
    }

};