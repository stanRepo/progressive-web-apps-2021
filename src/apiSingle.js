const fetch = require("fetch").fetchUrl;
const key = require("../src/constant/key.js");
const chalk = require("chalk");

module.exports = async (url) => {
  let res = await new Promise((reject, resolve) => {
    const x = fetch(url + key.key, (error, meta, body) => {
      console.log(`FETCHING: ${url}${key.key}`);

      if (error) {
        reject(error);
      }
      resolve(JSON.parse(body));
    });
    console.log(x);
    return x;
  }).catch((e) => {
    console.log(e);
  });
  // console.log(res);
  return res;
};
