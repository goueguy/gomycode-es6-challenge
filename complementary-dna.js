function DNAStrand(dna){
    //your code here
    let result = "";
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case "A":
                result+="T";
                break;
            case "T":
                result+="A";
                break;
            case "G":
                result+="C";
                break;
            case "C":
                result+="G";
                break;
            default:
                break;
        }
    }
    return result;
}
console.log(DNAStrand("AAAA"));