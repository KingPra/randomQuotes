
window.addEventListener('load', () => {
  getQuotes();
});

let button = document.querySelector('.get_quote');
button.addEventListener('click', () => getQuotes())

function getQuotes () {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://talaikis.com/api/quotes/random/');
  request.addEventListener('load', () => {
    let response = JSON.parse(request.responseText);
    let quote = document.querySelector('.quote');
    let author = document.querySelector('.author');

    quote.innerHTML = response.quote;
    author.innerHTML = `- ${response.author}`;
    console.log(response);
  })
request.send();
}
