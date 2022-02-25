const dotenv = require("dotenv");

dotenv.config();

const {PORT, DATABASE_URL, ACCESS_SECRET, REFRESH_SECRET} = process.env;

module.exports = {
    port: PORT,
    databaseUrl: DATABASE_URL,
    ACCESS_SECRET: ACCESS_SECRET,
    REFRESH_SECRET: REFRESH_SECRET
}
