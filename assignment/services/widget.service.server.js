module.exports = function (app, model) {

    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../public/uploads' });


    app.post ("/api/upload", upload.single('myFile'), uploadImage);
    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.delete("/api/widget/:widgetId", deleteWidget);
    app.put("/api/page/:pageId/widget",sortWidget);
    app.put  ("/api/widget/:widgetId", updateWidget);



    function sortWidget(req, res) {
        var pageId = req.params.pageId;
        var startIndex = req.query.initial;
        var endIndex = req.query.final;

        if (startIndex && endIndex) {
            model
                .widgetModel
                .reorderWidget(pageId, startIndex, endIndex)
                .then(
                    function (stat) {
                        return res.json(200);
                    },
                    function (err) {
                        res.status(400).send(err);
                    }
                );
        }

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
            //_id:widgetId+"",
            width:width+"",
            type:"IMAGE",
            pageId:pageId+"",
            url: "../uploads/" + filename,
            name:name

        };

        model
            .widgetModel
            .updateWidget(widgetId, imageWidget)
            .then(function(response) {
                    res.status(200);
                },
                function(err) {
                    res.status(404).send(err);
                });

        var url = "../assignment/index.html#/user/"+userId+
            "/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId;
        res.redirect(url);
    }

    function deleteWidget(req, res) {
        var wgid = req.params.widgetId;
        model
            .widgetModel
            .deleteWidget(wgid)
            .then(
                function() {
                    res.send(200);
                },
                function(error) {
                    res.statusCode(400).send(error);
                }
            );
    }

    function updateWidget(req, res) {
        //var websiteId = req.params.websiteId;
        //var pageId = req.params.pageId;
        var widgetId = req.params.widgetId;
        var widget = req.body;
        model.widgetModel
            .updateWidget(widgetId, widget)
            .then(
                function(response) {
                    res.json(response);
                },
                function(err) {
                    res.status(404).send(err);
                }
            );

    }


    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        model
            .widgetModel
            .findWidgetById(widgetId)
            .then(
                function(widget) {
                    res.json(widget);
                },
                function(error) {
                    res.statusCode(400).send(error);
                }
            );
    }

    function createWidget(req, res) {
        var pid = req.params.pageId;
        var widget = req.body;

        model
            .widgetModel
            .createWidget(pid, widget)
            .then(
                function(widget) {
                    res.json(widget);
                    console.log(widget);
                },
                function(error) {
                    res.statusCode(400).send(error);
                }
            );
    }

    function findAllWidgetsForPage(req, res) {
        var pid = req.params.pageId;
        model
            .widgetModel
            .findAllWidgetsForPage(pid)
            .then(
                function(widgets) {
                    res.json(widgets);

                },
                function(error) {
                    res.status(404).send(error);
                }
            );
    }




};