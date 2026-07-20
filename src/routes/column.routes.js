const express = require("express");
const router = express.Router();
const columnController = require("../controllers/column.controller");

router.post("/create", columnController.create);

router.post("/update", columnController.update);

router.post("/delete", columnController.delete);

module.exports = router;
