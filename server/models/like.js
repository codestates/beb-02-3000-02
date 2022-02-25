const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
    user_id: "string",
    post_id: "string"
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;