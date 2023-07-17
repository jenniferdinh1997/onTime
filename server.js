require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const connectDB = require("./config/database");
const favicon = require("serve-favicon");
const cors = require("cors");

const app = express();
connectDB();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/users", require("./routes/api/users"));
app.use('/api/rides', require('./routes/api/rides'));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app listening on port ${port}`);
});
