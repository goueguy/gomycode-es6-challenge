function SeriesSum(n)
{
    if(n==1){
        return `${n.toFixed(2)}`;
    }else{
        let calculation=0;
        for (let i = 1; i < n; i++) {
            if(i<=n){
                calculation+=1/(i+3);
            }
        }
        return (1+calculation).toFixed(2);
    }
}
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"