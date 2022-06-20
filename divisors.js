function divisors(integer) {
    let listDivisor = [];
    for (let i = 2; i < integer; i++) {
        if(integer%i==0){
            listDivisor.push(i)
        }
    }
    return listDivisor.length>0 ? listDivisor:`${integer} is prime`;
};

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));