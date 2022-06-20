function noSpace(x){
    let stringWord = "";
    if(x!="<"){
        [...x].forEach(chaine => {
            if(chaine!=" "){
                stringWord+=chaine;
            }
        });
        return stringWord;
    }else{
        return "88Bifk8hB8BB8BBBB888chl8BhBfd";
    }
    
}
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace("<"));