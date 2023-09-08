 const radius = [3, 1, 4, 2];

////////// Simple Ordinary way
const calculateArea = function(radius){
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

const calculateCircumference = function(radius){
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

const calculateDiameter = function(radius){
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log('Ordinary Way :::::::::')
console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));



////////// Demonstratio of D.R.Y => DONT REPEAT YOURSELF
 const calcArea = function(r){
    return Math.PI * r * r;
 }

 const calcCircumference = function(r){
    return 2 * Math.PI * r;
 }

 const calcDiameter = function(r){
    return 2 * r;
 }

// HIGHER ORDER FUNCTION :: 
const calculate = function(callbackFunc, radius){
    const output = [];
    for(let i = 0; i < radius.length ; i++){
        output.push(callbackFunc(radius[i]));
    }
    return output;
}

//calling HIGHER ORDER FUNCTION
console.log('Optimized Way :::::::::')
console.log(calculate(calcArea, radius));
console.log(calculate(calcCircumference, radius));
console.log(calculate(calcDiameter, radius));


////////// Map Function in JS
const arr = [1,2,3,4];
const new_arr = arr.map((value) => { return Math.PI * value * value })
console.log(arr);
console.log(new_arr)