var express = require("express");
var router = express.Router();
const endPoints = require("../src/constant/endPoints.js");
const apiSingle = require("../src/apiSingle.js");

router.get("/", function (req, res, next) {
  const url = endPoints.news
  apiSingle(url).then((data) => {


    res.render("offline", { obj: data[0].Data });
  });
});
module.exports = router;
