const endPoints = require("./constant/endPoints.js");
const fetch = require("fetch").fetchUrl;

module.exports = async () => {
  let res = await Promise.all(
    endPoints.initialLists.map((e) => {
      const x = fetch(e.url, function (error, meta, body) {
        if (error) {
          console.log(error);
        }
        // console.log(body.toString());
        return body.toString();
      });
      return x;
    })
  ).catch((e) => console.log(e));
  return res;
};
