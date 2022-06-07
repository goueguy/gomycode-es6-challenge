function isIsogram(str){
   let words = str.split("");
   for (let i = 0; i < words.length; i++) {
        if(str.toUpperCase().indexOf(words[i].toUpperCase()) !== str.toUpperCase().lastIndexOf(words[i].toUpperCase())){
            return false;
        }
   }
   return true;
}

console.log(isIsogram("isIsogram"));