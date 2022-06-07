//a, e, i, o, u
const vowel = ["a","e","i","o","u"];
function getCount(str) {
    let vowelsCount = 0;
    let arrayString = Array.from(str);
    // enter your magic here
    arrayString.map(item=>vowel.includes(item) ? vowelsCount++:0)
    return vowelsCount;
}

console.log(getCount("abracadabra"));