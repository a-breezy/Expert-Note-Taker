const router = require("express").Router();
const path = require("path");

// route to index.html
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// route to notes.html
router.get("/notes", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// route to anything other than '/' or '/notes'
router.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
