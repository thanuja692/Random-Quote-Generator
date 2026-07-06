const quotes = [
    {
        text: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        text: "A room without books is like a body without a soul",
        author: "Marcus Tullius Cicero"
    },
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("newQuoteBtn");

function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteText.textContent = randomQuote.text;
    authorText.textContent = "- " + randomQuote.author;
}

button.addEventListener("click", showQuote);

showQuote();