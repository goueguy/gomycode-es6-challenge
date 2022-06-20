function removeChar(str){
    let firstString =  str.replace(str.charAt(0),"");
    return firstString.slice(0,firstString.indexOf(firstString.charAt(firstString.length-1), firstString.length-1));
};

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("u45p08b5"));