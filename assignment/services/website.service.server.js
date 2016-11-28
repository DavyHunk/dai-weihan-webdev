module.exports = function (app, model) {
  
    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);


    function deleteWebsite(req, res) {
        var wid = req.params.websiteId;

        model
            .websiteModel
            .deleteWebsite(wid)
            .then(
                function(stats) {
                    //console.log(stats);
                    res.send(200);
                },
                function(error) {
                    res.statusCode(400).send(error);
                }
            );
    }

    function updateWebsite(req, res){
        var websiteId = req.params.websiteId;
        var newWebsite = req.body;

        model
            .websiteModel
            .updateWebsite(websiteId, newWebsite)
            .then(
                function(stats) {
                    res.send(200);
                },
                function(error) {
                    res.statusCode(400).send(error);
                }
            );

    }


    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;
        model
            .websiteModel
            .findWebsiteById(websiteId)
            .then(
                function (website) {
                    if(website){
                        res.send(website);
                    }
                    else{
                        res.send('0');
                    }

                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function createWebsite(req, res) {
        var userId = req.params.userId;
        var website = req.body;

        model
            .websiteModel
            .createWebsiteForUser(userId, website)
            .then(
                function(website) {
                    res.json(website);
                },
                function(error) {
                    res.statusCode(400).send(error);
                }
            );
    }

    function findAllWebsitesForUser(req, res) {
        var uid = req.params.userId;

        model
            .websiteModel
            .findAllWebsitesForUser(uid)
            .then(
                function (websites) {
                    if(websites){
                        res.send(websites);
                    }
                    else{
                        res.send('0');
                    }

                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }


};
