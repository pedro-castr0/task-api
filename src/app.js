const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const boardRoutes = require("./routes/board.routes");
const columnRoutes = require("./routes/column.routes");
const taskRoutes = require("./routes/task.routes");
const boardServices = require("./services/board.service");

const port = process.env.PORT;
const db = require("./database/connection");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, "localhost", (err) => {
  if (err) {
    console.log(err.message);
  }
});

app.use(express.static("src/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/board", boardRoutes);
app.use("/column", columnRoutes);
app.use("/task", taskRoutes);

app.get("/", async (req, res) => {
  const boards = await boardServices.getAll();

  res.render("index", {
    boards: boards,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res) => {
  res.status(404).render("error-404");
});
