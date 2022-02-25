const likeService = require('../services/likeService.js');

const getLikeCnt = async (req, res) => {
    const postId = req.query.postId;
    const likeCnt = await likeService.getLikeCnt(postId);

    if(likeCnt !== null) {
        return res.status(200).json({ data: likeCnt, message: "success" });
    } else {
        return res.status(202).json({ data: null, message: "failed" });
    }
}

const insertLike = async (req, res) => {
    const {userId, postId} = req.body;
    const like = await likeService.insertLike(userId, postId);

    if(like !== null) {
        return res.status(200).json({ data: like, message: "success" });
    } else {
        return res.status(202).json({ data: null, message: "failed" });
    }
}

const deleteLike = async (req, res) => {
    const {userId, postId} = req.body;
    const like = await likeService.deleteLike(userId, postId);

    if(like !== null) {
        return res.status(200).json({ data: like, message: "success" });
    } else {
        return res.status(202).json({ data: null, message: "failed" });
    }
}

module.exports = {
    getLikeCnt,
    insertLike,
    deleteLike
}