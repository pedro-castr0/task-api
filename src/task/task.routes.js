const express = require("express");
const taskController = require("./task.controller");
const router = express.Router();

router.post("/create", taskController.create);

router.put("/update", taskController.update);

router.delete("/delete", taskController.delete);

module.exports = router;
