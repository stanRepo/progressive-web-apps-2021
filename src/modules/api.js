const Templates = require("./templates.js");

exports.API = () => {
  fetch = (endPoint) => {
    return new Promise((resolve, reject) => {
      const data = fetch(`${endPoint.url}`).then((res) => {
        resolve(res.json());
      });
    }).catch((err) => {
      console.error(err);
    });
  };
  fetchEndPoints = async (endPoints) => {};
};
