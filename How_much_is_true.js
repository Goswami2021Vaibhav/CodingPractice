// Create a function which returns the number of true values there are in an array.

// Example  

// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

// code 

function getNumberOfTrue(arr) {
    let n = 0;
    arr.forEach(element => {
        if (element) {
            n++;
        }
    });

    return n;
}

console.log(getNumberOfTrue([true, false, false, true, false]))