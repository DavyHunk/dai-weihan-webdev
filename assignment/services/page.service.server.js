module.exports = function (app, model) {
    var pages = [
        {"_id": "321", "name": "Post 1", "websiteId": "456"},
        {"_id": "432", "name": "Post 2", "websiteId": "456"},
        {"_id": "543", "name": "Post 3", "websiteId": "456"}
    ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);



    function deletePage(req, res) {
        var pid = req.params.pageId;

        model
            .pageModel
            .deletePage(pid)
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

    function updatePage(req, res){
        var newPage = req.body;
        var pid = req.params.pageId;

        model
            .pageModel
            .updatePage(pid, newPage)
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

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        model
            .pageModel
            .findPageById(pageId)
            .then(
                function (page) {
                    if(page){
                        res.send(page);
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

    function createPage(req, res) {
        var page = req.body;
        var websiteId = req.params.websiteId;

        model
            .pageModel
            .createPage(websiteId, page)
            .then(
                function(page) {
                    res.json(page);
                },
                function(error) {
                    res.statusCode(400).send(error);
                }
            );
    }

    function findAllPagesForWebsite(req, res) {
        var wid = req.params.websiteId;

        model
            .pageModel
            .findAllPagesForWebsite(wid)
            .then(
                function (pages) {
                    if(pages){
                        res.send(pages);
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
