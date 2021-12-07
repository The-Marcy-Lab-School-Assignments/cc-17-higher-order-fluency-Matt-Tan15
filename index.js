//write your code here
const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']
//question 1
const pluralize = (arr) => arr.map(word => word + "s");
// console.log(pluralize(animals));

//question 2
const uppercase = (arr) => arr.map(word => {
    const chars = word.split("");
    chars[0] = chars[0].toUpperCase();
    const joined = chars.join("");
    return joined;
});
// console.log(uppercase(animals));

//question 3
const longWords = (arr) => arr.filter(word => word.length > 3);
// console.log(longWords(animals));

//question 4
const shortWords = (arr) => arr.filter(word => word.length < 5);
// console.log(shortWords(animals));

//question 5
const oddLength = (arr) => arr.filter(word => word.length % 2 !== 0)
// console.log(oddLength(animals));

//question 6
const longToShort = (arr) => arr.sort(function(a,b) {
    return b.length - a.length;
});
// console.log(longToShort(animals));

const numbers = [22, 15, 1114, 416, 37, 4];

//question 7
const sum = (arr) => arr.reduce((a,b) => a + b);
// console.log(sum(numbers));
