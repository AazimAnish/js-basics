/*
console.log("hello world");
console.log(24356);
console.log(typeof 123456789012345678901234567890123456789012345678901234567890n);
console.log(true);

const name = "tom";

if (name=="tom"){
    console.log("friday");
};

const arr = ["ascxc", 34659, true, ["tar", 233]];
console.log(arr)

const json = {
    name: 'aaww',
    surename: 'rrr',
    tor: 'hope'
};
console.log(json.food);

function square(x) {
    return x *x;
}
console.log(square(2))
*/


const Quote = require('inspirational-quotes');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : Quote.getRandomQuote(),

    e : "oO",
    T : "U "
}));


/*
console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false })); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote

{  
    "text" ; "My number one piece of advice is: you should learn how to program.",
    "author" ; "Mark Zuckerberg, founder of Facebook"
 }
 */


