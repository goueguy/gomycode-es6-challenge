class SmallestIntegerFinder {
    findSmallestInt(args) {
       let minimum = args[0];
       for (let i = 0; i < args.length; i++) {
           Number(args[i])<minimum ? minimum = Number(args[i]):"";
       }
       return minimum;
    }
}

let test = new SmallestIntegerFinder();

console.log(test.findSmallestInt([34, 15, 88, 21]));