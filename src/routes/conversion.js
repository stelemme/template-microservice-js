const express = require("express");
const router = express.Router();

const { descriptionGET, someConversionGET, someConversionPOST } = require("../controllers/conversion");

router.get("/", descriptionGET);

router.get("/some-conversion", someConversionGET)
router.post("/some-conversion", someConversionPOST);

module.exports = router;
