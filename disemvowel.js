function disemvowel(str) {
    let vowelArray = ["a","e","i","o","u"];
    for(letter of str){
        for(vowel of vowelArray){
            if(letter.toLowerCase()==vowel){
                str = str.replace(letter,"");

                
            }
        }
    }
    return str;
}

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));