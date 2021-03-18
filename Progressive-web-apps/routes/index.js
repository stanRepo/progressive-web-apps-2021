var express = require("express");
var router = express.Router();
const data = require("../src/api.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  // retrieve data
  data().then((obj) => {
    console.log(JSON.parse(obj).Data[0].RAW);
    // fix data

    res.render("index.ejs", { obj: JSON.parse(obj).Data }); // pass data to rendered HTML
  });
});
module.exports = router;
