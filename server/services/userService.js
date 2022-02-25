const user = require("../models/user.js");

const getUser = async (userId) => {
    try {
        return user.findOne({user_id:userId})
    } catch(error) {
        throw Error(error);
    }
}

const insertUser = async (userId) => {
    try {
        const newUser = new user({user_id:userId, user_name:userId});
        await newUser.save();
        return newUser;
    } catch(error) {
        throw Error(error);
    }
}

module.exports = {
    getUser,
    insertUser
}