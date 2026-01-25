require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./index");

const PORT = process.env.PORT || 5000;
const db_url = process.env.ATLAS_MONGO_URL;
if (process.env.NODE_ENV !== "test") {
    mongoose
        .connect(db_url)
        .then(() => console.log("Connected to MongoDB!"))
        .catch((err) => console.error("Could not connect to MongoDB...", err));

    app
        .listen(8080, (req, res) => {
            console.log("Server is listening on the port: ", 8080);
        })
        .on("error", (err) => {
            console.error("Server failed to start:", err.message);
        });
}