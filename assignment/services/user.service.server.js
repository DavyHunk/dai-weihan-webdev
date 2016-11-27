module.exports = function (app, model) {
    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

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
        //user._id = ""+(new Date()).getTime();
        //users.push(user);
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
        //res.send(user);
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
                    // console.log(req.session);
                    // req.session.currentUser = user;
                    res.json(user);
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
                    // console.log(req.session);
                    // req.session.currentUser = user;
                    res.json(user);
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



