const express = require('express');
const app = express();
const PORT = 3001;
const colors = require('colors');
const mongoose = require('mongoose');
const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res, next)=> {
    res.send("hello world")
});

app.use(routes);

mongoose.connect("mongodb://localhost/reactauth", { useNewUrlParser: true }, function(err) {
    if (err) throw err;
    console.log(`🐆  mongoose connection successful 🐆`.yellow);
    app.listen(PORT, (err)=> {
        if (err) throw err;
        console.log(`🌎  connected on port ${PORT} 🌍`.cyan)
    });
});



