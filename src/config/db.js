const { Pool } = require("pg")

module.exports = new Pool ({
    user: "postgres",
    password: "2110",
    host: "localhost",
    port : 5432,
    database: "gymmanager"
})