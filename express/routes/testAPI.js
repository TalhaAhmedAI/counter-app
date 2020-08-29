const express = require("express");
const router = express.Router();
var counter = 0;

router.get("/", (req, res, next) => {
  counter++;
  return res.json(counter);
});

module.exports = router;
