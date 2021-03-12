const main = require("../main.js");
var express = require("express");
var router = express.Router();
const indexPage = require("../main.js");
console.log(indexPage.main());
console.log(typeof indexPage);
/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("@home");

  res.render("index", indexPage);
});

module.exports = router;
