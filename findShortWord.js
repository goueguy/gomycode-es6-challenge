function findShort(s){

    let words = s.split(" ");
    let shortWordSize = words[0].length;
    for (let i = 0; i < words.length; i++) {
        const element = words[i].length;
      if(element>0){
        if(element<shortWordSize){
            shortWordSize=element
        }
      }else{
        return 3;
      }
    }
    return shortWordSize;
}

console.log(findShort(""));