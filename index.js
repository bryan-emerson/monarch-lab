const express = require("express");
const app = express();

app.use(require("./routes/index.js"));

app.listen(4000, () => console.log("Running on port 4000"));
