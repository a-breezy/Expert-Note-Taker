const router = require("express").Router();
const data = require("../../db/db.json");
const uuid = require("../../public/assets/js/uuid");
const fs = require("fs");
const path = require("path");

// route to get all data from db.json
router.get("/notes", (req, res) => {
	res.json(data);
});

// route to post new data to db.json with a unique ID
router.post("/notes", (req, res) => {
	if (!req.body.id) {
		req.body.id = uuid();
	}
	data.push(req.body);
	fs.writeFileSync(
		path.join(__dirname, "../../db/db.json"),
		JSON.stringify(data)
	);
	res.json(req.body);
});

// route to delete a post based on their ID
router.delete("/notes/:id", (req, res) => {
	let index = data
		.filter((x) => {
			return x.id;
		})
		.indexOf(req.params.id);
	data.splice(index, 1);
	fs.writeFileSync(
		path.join(__dirname, "../../db/db.json"),
		JSON.stringify(data)
	);
	res.json(data);
});

module.exports = router;
