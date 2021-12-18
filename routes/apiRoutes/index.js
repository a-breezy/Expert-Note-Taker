const router = require("express").Router();
const data = require("../../db/db.json");
const uuid = require("../../public/assets/js/uuid");
const fs = require("fs");
const path = require("path");

router.get("/notes", (req, res) => {
	res.json(data);
});

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
