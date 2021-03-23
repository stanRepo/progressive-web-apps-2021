const fetch = require("fetch").fetchUrl;
const key = require("../src/constant/key.js");
const chalk = require("chalk");

module.exports = async (url) => {
  let res = await Promise.all(
    [url].map((link) => {
      return new Promise((resolve, reject) => {
        const x = fetch(link + key.key, function (error, meta, body) {
          console.log(`FETCHING: ${link}${key.key}`);
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
