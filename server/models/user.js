const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_id: {
        type: "string",
        unique: true,
    },
    user_name: {
        type: "string",
        unique: true,
    },
    date: {
        type: "date",
        defalut: Date.now,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;