// 👉 QUESTION: Create a function that takes an array containing only numbers and return the first element.

//🪧🪧 EXAMPLE  

// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

// 🧑‍💻🧑‍💻 CODE 

function getFirstValue(arr) {

    //  method 1 
    console.log('The first element of array using method 1 :', arr[0])

    // method 2 
    const [a, ...b] = arr
    console.log('The first element of array using method 2 :', a)
}
getFirstValue([5, 8, 10])