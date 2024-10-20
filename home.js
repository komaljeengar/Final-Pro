var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    // Update the innerText of the elements with prices
    btc.innerText = `$${data.bitcoin.usd}`;  // Corrected string interpolation
    eth.innerText = `$${data.ethereum.usd}`; // Corrected string interpolation
    doge.innerText = `$${data.dogecoin.usd}`; // Corrected string interpolation
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  //typewriter animation
  function typeWriterEffect(words, elementId, speed, delayBetweenWords) {
    let wordIndex = 0;
    let letterIndex = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (letterIndex < words[wordIndex].length) {
            element.innerHTML = words[wordIndex].substring(0, letterIndex + 1);
            letterIndex++;
            setTimeout(type, speed);
        } else {
            setTimeout(erase, delayBetweenWords);  // Delay between words
        }
    }

    function erase() {
        if (letterIndex > 0) {
            element.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, speed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;  // Move to the next word
            setTimeout(type, speed);
        }
    }

    type();  // Start the typing effect
}

// Call the typeWriterEffect function
const words = ["Buy", "Sell", "Trade"];  // The words to cycle through
typeWriterEffect(words, "typewriter", 150, 1000);  // Speed: 150ms per letter, 1000ms delay between words

