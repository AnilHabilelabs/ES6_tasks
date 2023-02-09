// Map polyfill
let arr1 = [1, 2, 3, 4, 5];
function mapPolyFill(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]));
    }
    return newArr;
}
function square(x) {
    return x * x;
}
console.log(mapPolyFill(arr1, square));


// filter ployfill
let arr2 = [1, 2, 3, 4, 5, 6];
function filterPolyFill(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(cb(arr[i]));
        }
    }
    return newArr
}
function odd(n) {
    if (n % 2 == 1) return n;
}
console.log(filterPolyFill(arr2, odd))

// pollyfill of reduce
let arr3 = [1, 2, 3, 4, 5];

function polyfill_reduce(arr, cb, inital_value = arr[0]) {
    let acc = inital_value;
    for (let i = 1; i < arr.length; i++) {
        acc = cb(arr[i], acc);
    }
    return acc;
}
function sum(x, acc) {
    return (x + acc);
}
console.log(polyfill_reduce(arr3, sum));