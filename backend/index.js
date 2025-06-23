const dotenv = require("dotenv");
const express = require("express");


const app = express();
dotenv.config();

const dbConnect = require("./db/dbConnect.js");
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

let PORT=process.env.PORT
dbConnect();
app.listen(PORT, () => {
   
    console.log(`working at  ${PORT}`);
});