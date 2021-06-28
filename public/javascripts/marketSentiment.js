const marketSentiment = {
    setMarketSentiment: (sentiment, color) => {
        const el = document.querySelector("#marketSentiment");
        el.classList.add(color);
        el.innerHTML = sentiment;
      },
      switchMarketSentiment: (percentTotal) => {
        if (percentTotal < 0) {
          marketSentiment.setMarketSentiment(
            `Timid && Negative: ${percentTotal}`,
            "redNumber"
          );
        }
        if (percentTotal > 0) {
          marketSentiment.setMarketSentiment(
            `Timid && Positive: ${percentTotal}`,
            "greenNumber"
          );
        }
        if (percentTotal > 10) {
            marketSentiment.setMarketSentiment(
            `Excessive & Positive: ${percentTotal}`,
            "greenNumber"
          );
        }
        if (percentTotal < -10) {
            marketSentiment.setMarketSentiment(
            `Excessive & Negative: ${percentTotal}`,
            "redNumber"
          );
        }
    },
    setXValueAvarage: (listOfPercentages)=>{
        const headerEl = document.querySelector("#headerX");
        let total = 0;
        listOfPercentages.forEach((coin) => {
          total += coin.shareOfTotal;
        });
        total = total / listOfPercentages.length;
        headerEl.innerHTML = total.toFixed(3).toString();
    },
    calculateSentimentsCorrelation: ()=>{
        // list of percentages
        const listOfPercentagesNodes = document.querySelectorAll('.percentageDeltaPrice')
    let listOfPercentages = [];
    let percentTotal = 0;
    let percentArr = [];


    // create a nice list with all the changes per coin in percentages
    listOfPercentagesNodes.forEach(node=>{
      
    listOfPercentages.push(
        {
            name: node.parentElement.parentElement.childNodes[5].innerText.trim(),
            percentage: parseFloat(node.childNodes[0].textContent),
            shareOfTotal: null
        }
    )
})


    listOfPercentages.forEach(coin=>{
        percentTotal += coin.percentage;
        percentArr.push(coin.percentage);
    })

marketSentiment.switchMarketSentiment(percentTotal.toFixed(0))

listOfPercentages.forEach(coin=>{
coin.shareOfTotal = (coin.percentage / percentTotal) * 100
})
 // het totale aandeel % verandering van 1 coin  in de %verandering van alle coins /100 * investment.
  
 marketSentiment.setXValueAvarage(listOfPercentages)

 listOfPercentages.forEach(coin=>{
    const el = document.querySelector(`.coin${coin.name}`);
    el.innerHTML = `<h3>${coin.shareOfTotal.toFixed(2)}</h3>`;
    el.classList.add('percentageDeltaPrice')
 })

    }
}

export default marketSentiment;