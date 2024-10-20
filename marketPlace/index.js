const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-B9g6UX1cwQWzY2SD7L9Lp6UJ'
  }
};

// Fetch current price data for display in the crypto list
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,cardano,dogecoin,tether&vs_currencies=usd&include_24hr_change=true', options)
  .then(response => response.json())
  .then(json => {
      const container = document.querySelector('.container');
      const coins = Object.keys(json);

      coins.forEach(coin => {
          const coinInfo = json[coin];
          const price = coinInfo?.usd;
          const change = coinInfo?.usd_24h_change;

          if (price !== undefined && change !== undefined) {
              container.innerHTML += `
                  <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                      <div class="coin-logo">
                          <img src="img/${coin}.png">
                      </div>
                      <div class="coin-name">
                          <h3>${coin}</h3>
                          <span>/USD</span>
                      </div>
                      <div class="coin-price">
                          <span class="price">$${price}</span>
                          <span class="change">${change.toFixed(5)}</span>
                      </div>
                  </div>
              `;
          }
      });
  })
  .catch(error => console.error('Error:', error));

// Fetch last 30 days data for selected cryptocurrency
document.getElementById('simulate-investment').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('investment-amount').value);
  const crypto = document.getElementById('crypto-select').value;
  const resultDiv = document.getElementById('simulation-result');

  if (!amount || !crypto) {
      resultDiv.textContent = 'Please enter an amount and select a cryptocurrency.';
      return;
  }

  fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=30`, options)
      .then(response => response.json())
      .then(data => {
          const prices = data.prices;
          const latestPrice = prices[prices.length - 1][1];
          const avgPrice = prices.reduce((acc, price) => acc + price[1], 0) / prices.length;

          if (latestPrice < avgPrice) {
              resultDiv.textContent = `Good time to buy ${crypto}, as the current price of $${latestPrice.toFixed(2)} is below the 30-day average of $${avgPrice.toFixed(2)}.`;
          } else {
              resultDiv.textContent = `It may not be the best time to buy ${crypto}, as the current price of $${latestPrice.toFixed(2)} is above the 30-day average of $${avgPrice.toFixed(2)}. Consider waiting or checking other options.`;
          }
      })
      .catch(error => {
          resultDiv.textContent = 'Error fetching data. Please try again later.';
          console.error('Error:', error);
      });
});

document.getElementById('simulate-investment').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('investment-amount').value);
  const crypto = document.getElementById('crypto-select').value;
  const resultDiv = document.getElementById('simulation-result');

  if (!amount || !crypto) {
      resultDiv.textContent = 'Please enter an amount and select a cryptocurrency.';
      resultDiv.className = 'simulation-result neutral';
      return;
  }

  fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=30`, options)
      .then(response => response.json())
      .then(data => {
          const prices = data.prices;
          const latestPrice = prices[prices.length - 1][1];
          const avgPrice = prices.reduce((acc, price) => acc + price[1], 0) / prices.length;

          if (latestPrice < avgPrice) {
              resultDiv.textContent = `Good time to buy ${crypto}, as the current price of $${latestPrice.toFixed(2)} is below the 30-day average of $${avgPrice.toFixed(2)}.`;
              resultDiv.className = 'simulation-result positive';
          } else {
              resultDiv.textContent = `It may not be the best time to buy ${crypto}, as the current price of $${latestPrice.toFixed(2)} is above the 30-day average of $${avgPrice.toFixed(2)}. Consider waiting or checking other options.`;
              resultDiv.className = 'simulation-result negative';
          }
      })
      .catch(error => {
          resultDiv.textContent = 'Error fetching data. Please try again later.';
          resultDiv.className = 'simulation-result neutral';
          console.error('Error:', error);
      });
});
