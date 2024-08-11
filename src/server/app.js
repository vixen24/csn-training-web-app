const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;
const STATIC_ASSETS_PATH = path.resolve(`${__dirname}/../../static`);

const app = express();

// Serve front end assets which have been built by webpack
app.use("/static", express.static(STATIC_ASSETS_PATH));

app.get("/", (request, response) => {
	response.send(`
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<div id="container"></div>
		<script src="/static/main.js"></script>
		<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    	<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
	</body>
</html>
	`);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}.\n\nLoad it in your browser at http://localhost:${PORT}`))
