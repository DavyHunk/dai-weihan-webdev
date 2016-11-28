module.exports = function (app, model) {

    app.post("/api/user", createUser);
    app.get('/api/user', findUser);
    app.get('/api/user?username=username', findUserByUsername);
    app.get('/api/user?username=username&password=password', findUserByCredentials);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);
    

    function deleteUser(req, res){
        var userId = req.params.uid;

        model
            .userModel
            .deleteUser(userId)
            .then(
                function(stats) {
                    console.log(stats);
                    res.send(200);
                },
                function(error) {
                    res.statusCode(400).send(error);
                }
            );

    }

    function createUser(req, res){
        var user = req.body;
        model
            .userModel
            .createUser(user)
            .then(
                function(newUser) {
                    res.json(newUser)
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findUser(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];
        if(username && password) {
            findUserByCredentials(username, password, req, res);
        } else if(username) {
            findUserByUsername(username, res);
        } else {
            res.send(users);
        }

    }

    function findUserByUsername(username, res) {
        model
            .userModel
            .findUserByUsername(username)
            .then(
                function (user) {
                    if(user){
                        res.json(user);
                    }
                    else{
                        res.send('0');
                    }
                },
                function(err) {
                    res.statusCode(400).send(err);
                }
            );
    }


    function findUserByCredentials(username, password, req, res) {
        model
            .userModel
            .findUserByCredentials(username, password)
            .then(
                function (user) {
                    if(user){
                        res.json(user);
                    }
                    else{
                        res.send('0');
                    }
                },
                function(err) {
                    res.statusCode(400).send(err);
                }
            );
    }

    function findUserById(req, res) {
        var userId = req.params.uid;
        model
            .userModel
            .findUserById(userId)
            .then(
                function (user) {
                    if(user){
                        res.send(user);
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

    function updateUser(req, res){
        var userId = req.params.uid;
        var newUser = req.body;

        model
            .userModel
            .updateUser(userId, newUser)
            .then(
                function(stats) {
                    console.log(stats);
                    res.send(200);
                },
                function(error) {
                    res.statusCode(400).send(error);
                }
            );

    }


};



