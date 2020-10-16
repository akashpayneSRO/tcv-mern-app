import express from "express";
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// db

// app

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});