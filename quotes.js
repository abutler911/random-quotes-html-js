const quoteContainer = document.querySelector(".quote-container");
const quoteButton = document.querySelector("#quote-btn");
let url = "https://type.fit/api/quotes";

quoteButton.addEventListener("click", () => {
  quoteContainer.innerHTML = getQuote();
});

const getQuote = async function () {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return console.log(JSON.stringify(data[1].text));
    });
};

// getQuote();
