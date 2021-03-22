const fetch = require("fetch").fetchUrl;
const key = require("../src/constant/key.js");
const chalk = require("chalk");

module.exports = async (endPoints) => {
  let res = await Promise.all(
    endPoints.initialLists.map((e) => {
      return new Promise((resolve, reject) => {
        const x = fetch(e.url + key.key, function (error, meta, body) {
          console.log(`FETCHING: ${e.url}${key.key}`);
          if (error) {
            console.log(error);
            reject(error);
          }
          resolve(JSON.parse(body));
        });
        return x;
      });
    })
  ).catch((e) => {
    console.log(e);
  });
  return res;
};
