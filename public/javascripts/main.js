import renderNetworkStatus from "./renderNetworkStatus-min.js";
import colorPCTChange from "./colorPCTChange-min.js";
import marketSentiment from "./marketSentiment-min.js"

renderNetworkStatus();
marketSentiment.calculateSentimentsCorrelation()
colorPCTChange();

