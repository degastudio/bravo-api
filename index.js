const express = require("express");
const categories = require("./categories");

const app = express();

app.get("/", (req, res) => {
	res.json(categories);
});

app.get("/item/:id", async (req, res) => {
	let detail = {};

	categories.forEach(category => {
		category.items.forEach(item => {
			if (item.id === Number(req.params.id)) {
				detail = item;
				return;
			}
		});
	});

	res.json(detail);
});

const d = new Date();
const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
app.listen(process.env.PORT || 3080, () =>
	console.log(time, "SERVER IS RUNNING")
);
