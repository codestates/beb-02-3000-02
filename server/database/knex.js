const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "3000klay.sqlite3"
    }
});

module.exports = connectedKnex;