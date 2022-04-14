async function myQuote() {

    var urlQuotes = "https://type.fit/api/quotes";
    const response = await fetch(urlQuotes);

    const allQuotes = await response.json();

    const indx = Math.floor(Math.random() * allQuotes.length);

    const quote = allQuotes[indx].text;
    // console.log(quote);
    const auth = allQuotes[indx].author;

    //no author
    if (auth == null) {
        author = "Anonymous";
    }

    const text = document.getElementById('quote');
    // console.log(text);
    const author = document.getElementById('author');

    text.innerText = quote;
    author.innerHTML = "~ " + auth;
}