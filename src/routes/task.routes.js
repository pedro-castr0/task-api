const express = require("express");
const taskController = require("../controllers/task.controller");
const router = express.Router();

router.post("/create", taskController.create);

router.post("/update", taskController.update);

router.post("/delete", taskController.delete);

module.exports = router;
