let nam = 'jAmEs bOnD';

// for upercasing purposes
console.log(nam.toUpperCase());

// for lowercase purposes
console.log(nam.toLowerCase());

// for title case purposes
console.log(nam.toLowerCase().split('').map( function (word) {
    return word.replace(word[0], word[0].toUpperCase())} ).join(''));
