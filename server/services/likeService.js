const like = require("../models/like.js");

const getLikeCnt = async (postId) => {
    try {
        return like.find({post_id:postId}).count();   
    } catch (error) {
        throw Error(error);
    }
}

const insertLike = async (userId, postId) => {
    try {
        const newLike = new like({user_id:userId, post_id:postId});
        await newLike.save();
        return newLike;
    } catch(error) {
        throw Error(error);
    }
}

const deleteLike = async (userId, postId) => {
    try {
        await like.findOneAndDelete({user_id:userId, post_id:postId});
    } catch(error) {
        throw Error(error);
    }
    
}

module.exports = {
    getLikeCnt,
    insertLike,
    deleteLike
}