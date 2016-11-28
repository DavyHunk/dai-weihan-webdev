module.exports = function () {
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);


    var api = {
        createWebsiteForUser: createWebsiteForUser,
        findAllWebsitesForUser: findAllWebsitesForUser,
        findWebsiteById: findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite
        
    };
    return api;


    function createWebsiteForUser(userId, website) {
        website._user = userId;
        return WebsiteModel.create(website);
    }

    function findAllWebsitesForUser(userId) {
        return WebsiteModel.find({"_user": userId});
    }

    function updateWebsite(websiteId, website) {
        delete website._id;
        return WebsiteModel
            .update({_id: websiteId},{
                $set: {
                    name: website.name,
                    description: website.description
                }
            });
    }

    function deleteWebsite(websiteId) {
        return WebsiteModel.remove({_id: websiteId});
    }

    function findWebsiteById(websiteId) {
        return WebsiteModel.findById(websiteId);
        //return UserModel.find({_id: userId}); //returns an array
    }

};