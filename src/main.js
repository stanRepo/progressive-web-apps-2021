const endPoints = require("../src/modules/constant/endPoints.js");
const api = require("../src/modules/api.js");

exports.main = async () => {
  let finalList = false;
  try {
    let res = await Promise.all(
      endPoints.initialLists.map((e) => {
        console.log(e);
        const x = api.fetch(e);
        console.log(x);
        return x;
      })
    ).then((res) => {
      console.log("calling Combiner");
      // const combinedList = this.template.combineLists(res);
      // finalList = this.template.createDataSetMarketCapOverview(combinedList);
      // console.log("returning list");
      // return finalList;
    });
  } catch (err) {
    console.log(err);
    finalList = null;
  }
  return finalList;
};

// class App {
//   constructor() {
//     this.errorHandler = (obj) => {
//       if (obj == undefined || false || null) {
//         console.error("obj is undefined");
//         console.error(obj);
//         return false;
//       } else {
//         return obj;
//       }
//     };

//     this.store = new Store();
//     this.router = new Router();
//   }
// }

// const app = new App();
