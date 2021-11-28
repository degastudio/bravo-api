const express = require("express");
const restaurant = require("./restaurant");

const app = express();

app.get("/", (req, res) => {
	res.json(restaurant);
});

const d = new Date();
const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
app.listen(process.env.PORT || 3080, () =>
	console.log(time, "SERVER IS RUNNING")
);
