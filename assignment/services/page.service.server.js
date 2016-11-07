module.exports = function (app) {
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
        for(var p in pages){
            if (pages[p]._id === pid){
                pages.splice(p, 1);
                res.send(200);
                return;
            }
        }
        res.send('0');
    }

    function updatePage(req, res){
        var page = req.body;
        var pid = req.params.pageId;
        for(var p in pages){
            if (pages[p]._id === pid){
                pages[p] = page;
            }
        }
        res.send(200);

    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        for(var p in pages) {
            if(pages[p]._id === pageId) {
                res.send(pages[p]);
                return;
            }
        }
        res.send('0'); //res.send(result);
    }

    function createPage(req, res) {
        var page = req.body;
        page._id = (new Date()).getTime()+"";
        page.websiteId = req.params.websiteId+ "";
        pages.push(page);
        res.send(page);//res.send(200);
    }

    function findAllPagesForWebsite(req, res) {
        var wid = req.params.websiteId;
        var result = [];
        for(var p in pages) {
            if(pages[p].websiteId === wid) {
                result.push(pages[p]);
            }
        }
        res.json(result); //res.send(result);
    }

};