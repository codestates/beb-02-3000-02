const express = require("express");
const router = express.Router();
const db = require("../database/user.js");

router.post('/', async (req, res) => {
    const {address} = req.body;
    const username = 'unknown';

    const user = await db.getUserInfo(address);

    if(Array.isArray(user) && user.length === 0) {
        const newUser = {
            user_id: address,
            user_name: username
        }
        await db.insertUser(newUser);
        res.send("sign-up");
    } else {
        res.send("login");
    }

});

module.exports = router;