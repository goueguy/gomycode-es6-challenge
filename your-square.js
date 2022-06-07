var isSquare = function(n){
    if(n<0){
        return false;
    }else{
        if(Math.sqrt(n) * Math.sqrt(n)==n && Number.isInteger(Math.sqrt(n))==true){
            return true;
        }else{
            return false;
        }
    }
}
console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
console.log(isSquare(17));

