const knex = require("./knex.js");

function insertLikeRecord(data) {
    return knex("LIKE_RECORD").insert(data);
};

function getLikeCnt(id) {
    return knex("LIKE_RECORD").count("*").where("POST_ID", id);
}

function cancelLike(postId, userId){
    return knex("LIKE_RECORD").del().where("USER_ID", userId).andWhere("POST_ID", postId);
}

module.exports = {
    insertUser,
    getUserInfo
}