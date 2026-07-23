const express = require("express");
const router = express.Router();
const columnController = require("../controllers/column.controller");

router.post("/create", columnController.create);

router.put("/update", columnController.update);

router.delete("/delete", columnController.delete);

module.exports = router;
