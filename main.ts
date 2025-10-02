const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	console.log("Received a request", req.query.name);
    const name = req.query.name;
	res.send("Hello to you, " + name);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
