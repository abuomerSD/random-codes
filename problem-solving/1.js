function minMax(arr) {
    let min = Math.min.apply(Math, arr);
    let max = Math.max.apply(Math, arr);

    return [min, max];
}

console.log(minMax([1,2,3,4,5]));;