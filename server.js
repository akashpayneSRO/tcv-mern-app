const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
var cors = require('cors')
require("dotenv").config(); // for loading environment variables
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const DOMAIN = process.env.DOMAIN || "http://localhost"

// middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// db
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => console.info("Mongo Connection successful"))
    .catch(err => console.error("err", err));
mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;

// users
app.use("/api/users/", users);

// passport
app.use(passport.initialize());
require("./middleware/passport")(passport);

// posts
app.use("/api/posts/", posts);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server up and running on port ${DOMAIN}:${PORT}`);
});