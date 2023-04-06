function displayQuotes() {
    const quotesContainer = document.getElementById('quotes-container');
    const quotes = getQuotes();

    quotes.forEach(quote => {
      const quoteElement = document.createElement('div');
      quoteElement.classList.add('quote');
      quoteElement.textContent = quote.text;

      const authorElement = document.createElement('div');
      authorElement.classList.add('author');
      authorElement.textContent = `- ${quote.author}`;

      quoteElement.appendChild(authorElement);
      quotesContainer.appendChild(quoteElement);
    });
  }

  function getQuotes() {
    // return quotes from quotes.js file
  }

  window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      displayQuotes();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    alert('The content of the DOM is loaded');
    displayQuotes();
  });