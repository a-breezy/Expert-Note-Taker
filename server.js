const express = require("express");
const app = express();

const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const html = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// defines routes to api and html
app.use("/api", apiRoutes);
app.use("/", html);

app.listen(PORT, () => {
	console.log(`API server now on port ${PORT}!`);
});
