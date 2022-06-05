function XO(str) {
    //code here
    //str.split("")
    let countX=0;
    let countO=0;
    for(t of  str.split("")){
        t.toUpperCase()=="O" ? countO++:"";
        t.toUpperCase()=="X" ? countX++:"";
    }
    
    if(countO==countX){
        return true;
    }else{
        return false;
    }
}

console.log(XO("zpzpzpp"));