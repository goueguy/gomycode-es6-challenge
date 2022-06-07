const arrayNumbers = [1,-4,7,12];

function positiveSum(arr) {
    let sum = 0;
    arr.forEach(item => {
        item>0 ? sum+=item:"";
    });
    return sum;
}

console.log(positiveSum(arrayNumbers));