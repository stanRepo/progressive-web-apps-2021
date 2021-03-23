var express = require("express");
var router = express.Router();
const apiSingle = require("../src/apiSingle.js");
const endPoints = require("../src/constant/endPoints.js");
const chalk = require("chalk");

router.get("/", function (req, res, next) {
  const coin = req.baseUrl.split("/details/")[1];
  const url = endPoints.baseLatest + coin + endPoints.extensionLatest;
  apiSingle(url).then((data) => {
    res.render("details.ejs", { obj: data[0] });
  });
});
module.exports = router;
