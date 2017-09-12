(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

tweet = document.querySelector('.twitter');
tweet.addEventListener('click', () => {
  const twitter = href="https://twitter.com/intent/tweet?text=";
  let phrase = document.querySelector('.quote').innerHTML;
  let author = document.querySelector('.author').innerHTML;

    window.open(`${twitter}${phrase} -${author}`);
});

},{}]},{},[1]);
