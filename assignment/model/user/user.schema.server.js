module.exports = function () {
    var mongoose = require("mongoose");
    var WebsiteSchema = require("../website/website.schema.server");


    var UserSchema = mongoose.Schema({
        username: {type: String, required: true},
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        google:   {
            id:    String,
            token: String
        },
        facebook:   {
            id:    String,
            token: String
        },
        role: {type: String, enum: ['ADMIN', 'STUDENT', 'FACULTY']},
        dateCreated: {type: Date, default: Date.now},
        //websites:[WebsiteSchema]
        websites: [{type: mongoose.Schema.Types.ObjectId, ref: "Website"}]
    }, {collection: "user"});

    return UserSchema;
};