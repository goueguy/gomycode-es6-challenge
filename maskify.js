// return masked string
function maskify(cc) {
    let code,result ="";
    if(cc.length>4){
        const fourLastDigits = cc.slice(0,cc.length-4);
        for (let i = 0; i < Array.from(fourLastDigits).length; i++) {
            if(cc.length>4){
                result+="#";
                return result+''+String(cc).slice(-4);
            }else{
                return code +=cc;
            }
        }
    }else{
        return cc;
    }
     if(cc.length>4){
        const fourLastDigits = cc.slice(0,cc.length-4);
        for (let i = 0; i < Array.from(fourLastDigits).length; i++) {
            if(cc.length-i>4){
                return result
                
            }
        }
     }else{
         return cc;
     }
}
console.log(maskify('9'));
console.log(maskify('11111'));
console.log(maskify('Skippy'));
console.log(maskify('oxs'));
console.log(maskify('9'));