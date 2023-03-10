const quoteContainer = document.querySelector("#quote");
const author = document.querySelector("#author");
const quoteButton = document.querySelector("#quote-btn");
let url = "https://type.fit/api/quotes";

quoteButton.addEventListener("click", () => {
  getQuote().then((quote) => {
    quoteContainer.innerHTML = quote.text;
    if (!author) {
      author.innerHTML = `-- Anonymous`;
    }
    author.innerHTML = `-- ${quote.author}`;
  });
});

const getQuote = async function () {
  const randomNumber = Math.floor(Math.random() * 1000);
  const response = await fetch(url);
  const data = await response.json();

  return data[randomNumber];
};
