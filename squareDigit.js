function squareDigits(num){
    let digits = num.toString().split("");
    let result = "";
    for (let i = 0; i < digits.length; i++) {
        result+=digits[i]*digits[i];
    }
    return Number(result);
}

console.log(squareDigits(9119));
console.log(squareDigits(3212));