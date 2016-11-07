<<<<<<< HEAD
(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);



    function UserService($http) {

<<<<<<< HEAD
=======
        var api = {
            createUser: createUser,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            deleteUser: deleteUser

        };
        return api;



        function createUser(username, password) {
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/user", user);
        }

        function findUserById(userId) {
            var url = "/api/user/"+userId;
            return $http.get(url);
        }

        function findUserByUsername(username) {
            var url = "/api/user/"+username;
            return $http.get(url);
        }

        function findUserByCredentials(username, password) {
            var url = "/api/user?username="+username+"&password="+password;
            return $http.get(url);


        }

        function updateUser(user) {
            var url = "/api/user/" + user._id;
            return $http.put(url, user);
        }

        function deleteUser(uid) {
            var url = "/api/user/" + uid;
            return $http.delete(url);

        }



    }
=======
(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);



    function UserService() {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];
>>>>>>> origin/master
        var api = {
            createUser: createUser,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            deleteUser: deleteUser

        };
        return api;



<<<<<<< HEAD
        function createUser(username, password) {
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/user", user);
=======
        function createUser(user) {
            users.push(user);
            return users;
>>>>>>> origin/master
        }

        function findUserById(userId) {
            var url = "/api/user/"+userId;
            return $http.get(url);
        }

        function findUserByUsername(username) {
            var url = "/api/user/"+username;
            return $http.get(url);
        }

        function findUserByCredentials(username, password) {
<<<<<<< HEAD
            var url = "/api/user?username="+username+"&password="+password;
            return $http.get(url);


=======
            for(var i in users) {
                if(users[i].username === username
                    && users[i].password === password) {
                    return users[i];
                }
            }
            return null;
        }

        function updateUser(userId, user) {
            for(var i in users) {
                if(users[i]._id === userId) {
                    users[i] = user;
                    return true;
                }
            }
            return false;
>>>>>>> origin/master
        }

        function updateUser(user) {
            var url = "/api/user/" + user._id;
            return $http.put(url, user);
        }

<<<<<<< HEAD
        function deleteUser(uid) {
            var url = "/api/user/" + uid;
            return $http.delete(url);

        }
=======
    function init(){
>>>>>>> origin/master

    }
init();

    }
>>>>>>> origin/master
})();