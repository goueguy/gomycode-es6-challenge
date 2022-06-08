function findNextSquare(sq) {
  if(Number.isInteger(Math.sqrt(sq)+1)*(Math.sqrt(sq)+1)){
    return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1);
  }
  return -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));