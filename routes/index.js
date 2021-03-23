var express = require("express");
var router = express.Router();
const apiMultiple = require("../src/apiMultiple.js");
const endPoints = require("../src/constant/endPoints.js");
const helpers = require("../src/helpers.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  // retrieve data
  apiMultiple(endPoints).then((obj) => {
    // console.log(JSON.parse(obj).Data[0].RAW);
    // fix data
    // console.log( obj[0].Data[0].RAW.EUR);
    // obj[0].Data.forEach((coin) => {
    //   coin.RAW.EUR.keys().map((key) => {
    //     return helpers.toIntToFixedToString(key);
    //   });
    // });
    res.render("index.ejs", {
      obj: obj[0].Data,
    }); // pass data to rendered HTML
  });
});
module.exports = router;
