function descendingOrder(n){
    if(n){
        let numbers = n.toString().split("");
        let res = numbers.sort().reverse();
        return Number(res.join(""));
    }else{
        return 0;
    }
}

console.log(descendingOrder(121));