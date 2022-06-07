function filter_list(l) {
    const filter_array = [];
    l.forEach(item => {
        Number.isInteger(item) ? filter_array.push(item):"";
    });
    return filter_array;
}

console.log(filter_list([1,2,'a','b']));