module.exports = function (app) {



    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../public/uploads' });
    var widgets = [
        {"_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        {"_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {
            "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "https://s-media-cache-ak0.pinimg.com/564x/8f/17/e1/8f17e19c5d4c3531bb7ae3f6b0e85955.jpg"
        },
        {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>html ipsum</p>"},
        {"_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {
            "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E"
        },
        {
            "_id": "789", "widgetType": "HTML", "pageId": "321",
            "text": '<p>Presidential candidate Donald Trump has a penchant for lawsuits, much like <a href="https://gawker.com/gawker-was-murdered-by-gaslight-1785456581" target="_blank" rel="noopener">another Republican convention speaker</a>. Today Trump gave a speech in Gettysburg, where he said he is fighting “the power structure,” and that his administration would not approve of AT&amp;T trying to buy Time Warner “and thus, CNN.”<span class="read-more-placeholder"></span><span class="readmore-core-decorated"></span></p>'
        }
    ];


    app.post ("/api/upload", upload.single('myFile'), uploadImage);
    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);
    app.put("/api/page/:pageId/widget",sortWidget);


    function sortWidget(req, res) {
        var pageId = req.params.pageId;
        var startIndex = req.query.initial;
        var endIndex = req.query.final;
        widgets.splice(endIndex, 0, widgets.splice(startIndex, 1)[0]);
        res.send(200);

    }



    function uploadImage(req, res) {
        var userId        = req.body.userId;
        var websiteId     = req.body.websiteId;
        var widgetId      = req.body.widgetId;
        var pageId        = req.body.pageId;
        var width         = req.body.width;
        var name          = req.body.name;
        var myFile        = req.file;
        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;


        var widget = req.body;
        var imageWidget = {
            _id:widgetId+"",
            width:width+"",
            widgetType:"IMAGE",
            pageId:pageId+"",
            url: "../uploads/" + filename,
            name:name

        };

        for(var w in widgets){
            if (widgets[w]._id === widgetId){
                widgets[w] = imageWidget;
            }
        }

        var url = "../assignment/index.html#/user/"+userId+
            "/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId;
        res.redirect(url);
    }

    function deleteWidget(req, res) {
        var wgid = req.params.widgetId;
        for(var w in widgets){
            if (widgets[w]._id === wgid){
                widgets.splice(w, 1);
                res.send(200);
                return;
            }
        }
        res.send('0');
    }

    function updateWidget(req, res){
        var widget = req.body;
        var wgid = req.params.widgetId;
        for(var w in widgets){
            if (widgets[w]._id === wgid){
                widgets[w] = widget;
            }
        }
        res.send(200);

    }


    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        for(var w in widgets) {
            if(widgets[w]._id === widgetId) {
                res.send(widgets[w]);
                return;
            }
        }
        res.send('0');
    }

    function createWidget(req, res) {
        var widget = req.body;
        widgets.push(widget);
        res.send(widgets);
    }

    function findAllWidgetsForPage(req, res) {
        var pid = req.params.pageId;
        var result = [];
        for(var w in widgets) {
            if(widgets[w].pageId === pid) {
                result.push(widgets[w]);
            }
        }
        res.send(result);
    }




};