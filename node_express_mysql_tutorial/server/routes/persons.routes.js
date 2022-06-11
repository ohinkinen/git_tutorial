const express = require("express");
const router = express.Router();
const personsController = require("../controllers/persons.controller");

// retrieve every person
router.get("/", personsController.findAll);

// retrieve a single person with id
router.get("/:id", personsController.findById);

// create a new person
router.post("/", personsController.create);

// update a person with id
router.put("/:id", personsController.update);

// delete a person with id
router.delete("/:id", personsController.delete);

module.exports = router;