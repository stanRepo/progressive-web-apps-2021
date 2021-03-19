const endPoints = require("./constant/endPoints.js");
const fetch = require("fetch").fetchUrl;

module.exports = async () => {
  let res = await Promise.all(
    endPoints.initialLists.map((e) => {
      return new Promise((resolve, reject) => {
        const x = fetch(e.url, function (error, meta, body) {
          if (error) {
            console.log(error);
            reject(error);
          }
          resolve(body);
        });
        return x;
      });
    })
  ).catch((e) => {
    console.log(e);
  });
  return res;
};
