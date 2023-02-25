const loadData = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuotes(data))
};

const displayQuotes = quotes => {
    const blockQuote = document.getElementById('quotes');
    blockQuote.innerText = quotes.quote;
};

loadData()