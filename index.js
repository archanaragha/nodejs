const express = require("express");

const app = express();

app.get("/", (req, res) => res.write("<h1>Hello Test</h1"));

app.listen(3000, () => console.log("Port 3000"));
