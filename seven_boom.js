// 👉 QUESTION:  Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

//🪧🪧 EXAMPLE  
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.


// 🧑‍💻🧑‍💻 CODE 

const sevenBoom = (arr) => {
    let status = false;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element == 7) {
            status = true
            break
        } else {
            element = element.toString()
            if (element.includes('7')) {
                status = true;
            }
        }
    }

    if (status) {
        return "Boom!"
    } else {
        return 'There is no 7 in the array'
    }
}

