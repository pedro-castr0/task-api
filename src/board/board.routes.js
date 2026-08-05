const express = require("express");
const router = express.Router();
const boardController = require("./board.controller");

router.post("/create", boardController.create);

router.put("/update", boardController.update);

router.delete("/delete", boardController.delete);

router.get("/:id", boardController.read);

module.exports = router;
