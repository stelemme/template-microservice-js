const express = require("express");
const router = express.Router();

const { descriptionGET, someOperationGET, someOperationPOST } = require("../controllers/operation");

router.get("/", descriptionGET);

router.get("/some-operation", someOperationGET)
router.post("/some-operation", someOperationPOST);

module.exports = router;
