const knex = require("./knex.js");

function insertUser(user) {
    return knex("USER").insert(user);
};

function getUserInfo(id) {
    return knex("USER").select("*").where("USER_ID", id);
}

module.exports = {
    insertUser,
    getUserInfo
}