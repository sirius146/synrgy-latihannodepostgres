const {Client} = require ("pg")
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "nodedb",
    password: "M@ngafans97",
    port:5432

})
client.connect();

const getAuthors = (req,res) => {
    client.query("SELECT * FROM authors ORDER BY id DESC", (err,results) => {
        if(err)
            throw(err)
        res.status(200).json(results.rows)
    })
}

const createAuthors = (req,res) => {
    //console.log(req.body)
    const { name, email } = req.body

    client.query('INSERT INTO authors(name,email) VALUES($1,$2)', [name,email], (err,results) => {
        if (err)
            throw(err)
        res.status(200).json("Berhasillll")
    })
}

module.exports = {getAuthors, createAuthors}