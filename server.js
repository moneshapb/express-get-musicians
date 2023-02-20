const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO
app.get("/musician", async (req, res) => {
    const musician = await Musician.findAll();
    res.json(list);
})
app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})