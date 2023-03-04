let quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    profession: "Irish poet",
    topics: ["Inspirational", "Advice", "Humor"],
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    profession: "Irish poet",
    topics: ["Philosophy", "Humor"],
  },
  {
    quote: "True friends stab you in the front.",
    author: "Oscar Wilde",
    profession: "Irish poet",
    topics: ["Philosophy", "People"],
  },
  {
    quote: "Women are made to be Loved, not understood.",
    author: "Oscar Wilde",
    profession: "Irish poet",
    topics: ["Philosophy", "Humor"],
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Inspirational", "Philosophy", "Advice"],
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Inspirational", "Life", "Advice"],
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
    profession: "Former First Lady of the United States",
    topics: ["Wisdom"],
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
    profession: "Former First Lady of the United States",
    topics: ["Wisdom", "People"],
  },
  {
    quote:
      "Do what you feel in your heart to be right - for you'll be criticized anyway.",
    author: "Eleanor Roosevelt",
    profession: "Former First Lady of the United States",
    topics: ["Wisdom", "Advice"],
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
    profession: "Former First Lady of the United States",
    topics: ["Wisdom", "Life"],
  },
];
const quoteContainer = document.querySelector(".quote-container");
const quoteButton = document.querySelector("#quote-btn");

quoteButton.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber].quote;
  quoteContainer.innerText = randomQuote;
});
