module.exports = function (app) {
    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
        { "_id": "678", "name": "Checkers",    "developerId": "123" },
        { "_id": "789", "name": "Chess",       "developerId": "234" }
    ];

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);


    function deleteWebsite(req, res) {
        var wid = req.params.websiteId;
        for(var w in websites){
            if (websites[w]._id === wid){
                websites.splice(w, 1);
                res.send(200);
                return;
            }
        }
        res.send('0');
    }

    function updateWebsite(req, res){
        var website = req.body;
        var wid = req.params.websiteId;
        for(var w in websites){
            if (websites[w]._id === wid){
                websites[w] = website;
            }
        }
        res.send(200);

    }


    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;
        for(var w in websites) {
            if(websites[w]._id === websiteId) {
                res.send(websites[w]);
                return;
            }
        }
        res.send('0');
    }

    function createWebsite(req, res) {
        var website = req.body;
        website._id = (new Date()).getTime()+"";
        website.developerId =req.params.userId+ "";
        websites.push(website);
        res.send(websites);
    }

    function findAllWebsitesForUser(req, res) {
        var uid = req.params.userId;
        var result = [];
        for(var w in websites) {
            if(websites[w].developerId === uid) {
                result.push(websites[w]);
            }
        }
        res.json(result); //res.send(result);
    }


};