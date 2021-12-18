const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
// const apiRoutes = require("./routes/apiRoutes/apiRoutes");
const html = require("./routes/htmlRoutes");
const data = require("./db/db.json");

const PORT = process.env.port || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
	res.json(data);
});

app.use("/", html);

app.listen(PORT, () => {
	console.log(`API server now on port ${PORT}!`);
});
