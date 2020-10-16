const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config(); // for loading environment variables
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// db
const MONGO_URI = process.env.MONGO_URI;
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => console.info("Mongo Connection successful"))
    .catch(err => console.error("err", err));

// users
app.use("/api/users/", require("./routes/api/users"));

// passport
const passport = require("passport");
app.use(passport.initialize());
require("./middleware/passport")(passport);

// posts
app.use("/api/posts/", require("./routes/api/posts"));

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});