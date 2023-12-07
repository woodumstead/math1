// ------- math resources for practice and reference ----





console.log(Math.abs(-4));
// ^ abs or absolute spits out a positive number regarless of input. 

function difference (a, b) {
    return Math.abs(a - b);
}
console.log(difference(5, 9));


// ===== max spits out highest int, min "
console.log(Math.max(10, 5));
console.log(Math.min(10, 5));

console.log(Math.min(...[45, 3 ,55, 42, 3, 2, 28, 2]));
//                    ^ using spread operator to read into and array, otherwise reads "NaN(not a number)"


console.log(Math.floor(9.9));
console.log(Math.ceil(1.1));

const numbers = [4.5, 8.9, 3.2, 7.1];
const numbersRoundUp = numbers.map(Math.ceil);
// using map function to round each int in an array
console.log(numbersRoundUp);


console.log(Math.sqrt(3.14));
// square root function

//power of function and operator
console.log(Math.pow(2, 1.6535));
console.log(2 ** 1.6535);

// Math sign, -int spits out -1, +int spits out +1

console.log(Math.sign(7))

// finding x and y axis?
const x = [5, 3, -1];
const y = -4;

const demo = () => {
    console.log(Math.sign(x, y));
};

demo();
// nodemon NaN

