const express = require("express");
const app = express();

const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const html = require("./routes/htmlRoutes");


const PORT = process.env.port || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", html);

app.listen(PORT, () => {
	console.log(`API server now on pcort ${PORT}!`);
});
