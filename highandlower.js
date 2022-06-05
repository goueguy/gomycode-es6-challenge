function highAndLow(numbers){
    // ...
    let array = numbers.split(" ");
    let max = array[0];
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if(Number(array[i])>max){
            max=Number(array[i]);
        }
        if(Number(array[i])<min){
            min=Number(array[i]);
        }
    }
    
    return `${max} ${min}`;
}

//highAndLow("1 2 3 4 5");

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));