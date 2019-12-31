const axios = require("axios");

axios({
  method: "GET",
  url: "https://alpha-vantage.p.rapidapi.com/query",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
    "x-rapidapi-key": "7e45ec5e4fmsh4f3dac417f9eaa7p179a33jsnbfe4cb2e4c79"
  },
  params: {
    symbol: "AAPL",
    function: "GLOBAL_QUOTE"
  }
})
  .then(response => {
    console.log(response.data.open);
  })
  .catch(error => {
    console.log(error);
  });
