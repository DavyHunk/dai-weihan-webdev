module.exports = function () {
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);


    var api = {
        createUser:createUser,
        findUserById:findUserById,
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        updateUser: updateUser,
        deleteUser: deleteUser
    };
    return api;

    function findUserByUsername(username) {
        return UserModel.findOne({username: username});
    }

    function updateUser(userId, user) {
        delete user._id;
        return UserModel
            .update({_id: userId},{
                $set: {
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            });
    }

    function deleteUser(userId) {
        return UserModel.remove({_id: userId});
    }

    function findUserByCredentials(username, password) {
        return UserModel.findOne({username: username, password: password});
    }

    function findUserById(userId) {
        return UserModel.findById(userId);
        //return UserModel.find({_id: userId}); //returns an array
    }

    function createUser(user) {
        return UserModel.create(user);
    }


};