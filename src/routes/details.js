var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/details/:coin", function (req, res, next) {
  console.log(res);
  console.log(req);
  res.render("details", { message: "this is details" });
});

module.exports = router;
