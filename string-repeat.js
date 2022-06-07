function repeatStr (n, s) {
    let chaine = "";
    for (let i = 0; i < n; i++) {
        chaine+=s;
    }
  return chaine;
}

console.log(repeatStr(5, "Hello") );