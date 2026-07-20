const express = require("express");
const router = express.Router();
const boardController = require("../controllers/board.controller");

router.get("/create", boardController.createForm);

router.post("/create", boardController.create);

router.post("/update", boardController.update);

router.post("/delete", boardController.delete);

router.get("/:id", boardController.read);

module.exports = router;
