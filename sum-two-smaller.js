
function sumTwoSmallestNumbers(numbers) {  
    
    //let twoSmallerNumbers = numbers.sort((a,b)=>a-b).slice(0,2).reduce((acc,value)=>acc+value);
    let twoSmallerNumbers = numbers.sort((a,b)=>a-b).slice(0,2);
    let result = 0;
    for (let i = 0; i < twoSmallerNumbers.length; i++) {
        result+=twoSmallerNumbers[i];
    }
    return result;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
