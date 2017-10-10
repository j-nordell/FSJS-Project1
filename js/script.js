var quotes = [ /*
    { 
        quote: "Frankly, my dear, I don't give a damn.",
        source: "Rhett Butler",
        citation: "Gone With the Wind",
        year: 1939,
        tags: ["movies"]
    },
    {
        quote: "Do not take life too seriously. You will never get out of it alive.",
        source: "Elbert Hubbard",
        tags: ["humor"]
    },
    {
        quote: "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.",
        source: "Reba McEntire",
        tags: ["motivation", "humor"]
    },
    {
        quote: "Others have seen what is and asked why. I have seen what could be and asked why not.",
        source: "Pablo Picasso",
        citation: "Pablo Picasso: Metamorphoses of the Human Form: Graphic Works",
        tags: ["creativity"]
    },
    {
        quote: "Imagination is everything. It is the preview of life's coming attractions.",
        source: "Albert Einstein",
        tags: ["creativity"]
    },
    {
        quote: "I never made one of my discoveries through the process of rational thinking.",
        source: "Albert Einstein",
        tags: ["creativity"]
    },
    {
        quote: "The worst enemy to creativity is self-doubt.",
        source: "Sylvia Plath",
        citation: "The Unabridged Journals of Sylvia Plath",
        tags: ["creativity", "motivation"]
    }, */
    {
        quote: "Only I can change my life. No one can do it for me.",
        source: "Carol Burnett",

    },
    {
        quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence",
        source: "Hellen Keller"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        source: "Confuscius"
    },
    {
        quote: "If you can dream it, you can do it.",
        source: "Walt Disney"
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        source: "Thomas A. Edison"
    } 
];

let usedQuotes = []

function getRandomQuote() {
    if(quotes.length === 0) {
        // Quotes is empty, we need to reset the arrays
        quotes = usedQuotes;
        usedQuotes = [];
        return getRandomQuote(); // It's necessary to recurse and go again now it's in the proper state
    } else {
        const selection = quotes.splice(Math.floor(Math.random() * quotes.length), 1)[0]; // This simultaneously gets the object at a random index and removes it from the quotes array
        usedQuotes.push(selection);
        return selection;
    }
}

function printQuote() {
    let html = "";
    let selectedQuote = getRandomQuote();
    html += `<p class="quote">${selectedQuote["quote"]}</p>`;
    html += `<p class="source">${selectedQuote["source"]}`;
    if(selectedQuote.hasOwnProperty("citation")) {
        html += `<span class="citation">${selectedQuote["citation"]}</span>`;
    }
    if(selectedQuote.hasOwnProperty("year")) {
        html += `<span class="year">${selectedQuote["year"]}</span>`;
    }
    html += "</p>";

    document.getElementById('quote-box').innerHTML = html;
    console.log(selectedQuote);
}
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

