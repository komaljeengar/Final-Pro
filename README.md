## CryptoHub – Cryptocurrency Dashboard & Marketplace

CryptoHub is a front‑end web project built for the **Hunters Roastathon** that lets users explore real‑time cryptocurrency prices, connect a wallet, and simulate investment decisions using live market data.

### Features
- **Landing page (`index.html`)**: Hero section with call‑to‑action, navigation to **Market** and **Learn** pages.
- **Live price ticker**: Fetches BTC, ETH, and DOGE prices via the **CoinGecko public API** and displays them in a responsive coin strip.
- **MetaMask wallet connect**: Detects **MetaMask** in the browser and lets the user connect their Ethereum wallet with a single button.
- **Marketplace page (`marketPlace/index.html`)**: Lists multiple coins (Bitcoin, Ethereum, Litecoin, Cardano, Dogecoin, Tether) with current price and 24‑hour change.
- **Investment simulation tool**: Uses 30‑day historical data from CoinGecko to indicate whether it is a good time to buy a selected crypto based on average vs. latest price.
- **Responsive UI**: Custom styling with multiple CSS files (`home.css`, `learn.css`, `marketPlace/style.css`) and crypto‑themed imagery.

### Tech Stack
- **Frontend**: HTML5, **CSS3**, **Vanilla JavaScript (ES6)**  
- **APIs**: **CoinGecko REST API** for live and historical crypto prices  
- **Web3**: Basic **MetaMask / `window.ethereum`** integration for wallet connect  

### Project Structure
- `index.html` – Main landing page with wallet connect and quick price panel  
- `home.js` – Fetches BTC/ETH/DOGE prices and handles the typewriter effect  
- `learn.html`, `learn.css` – Educational / learning section (static content)  
- `marketPlace/` – Marketplace UI, investment simulator, and asset listing  
  - `index.html` – Marketplace layout and investment form  
  - `index.js` – Coin list rendering and buy‑timing simulation logic  
  - `img/` – Crypto icon assets for the market cards  
- `images/`, `img/` (root) – Shared background and logo assets  

### Getting Started
1. **Clone or download** this repository to your local machine.  
2. Open `index.html` directly in a modern browser **or** use an extension like **Live Server** in VS Code.  
3. Ensure you have **MetaMask** installed in your browser to test the wallet connect button.  
4. The app fetches data from the **CoinGecko API**, so you’ll need an active internet connection.  

### Notes
- This project is purely **front‑end** (no backend server).  
- API usage is subject to CoinGecko’s rate limits and availability.  
- Designed as a hackathon/demo project to showcase **API integration, Web3 basics, and front‑end UI/UX**.