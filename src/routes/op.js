const express = require("express");
const router = express.Router();


// Importing the controllers
const {
  descriptionGET,
  someOperationGET,
  someOperationPOST,
} = require("../controllers/some-operation");

// Assigning a controller to the "/op/" URI
router.get("/", descriptionGET);

// Assigning controllers to the "/op/some-operation" URI
router.get("/some-operation", someOperationGET);
router.post("/some-operation", someOperationPOST);

module.exports = router;
