///////////////// map :: doing something on each and every element of the array :: Returns a new array.
const arr = [2,1,4,3];
const new_arr = arr.map((value) => {
    return value ** 3;
})
console.log(new_arr);

// Example1 : Map 
const ex1 = [5, 1, 3, 2, 6];    
function double(x, y){
    console.log('Ex1 : index : ', y)
    return 2 * x;
}
const out1 = ex1.map(double);
console.log('Ex1 : out1 : ', out1);

// Example2 : Map
const ex2 = [5, 1, 3, 2, 6];
const out2 = ex2.map((x) => x.toString(2));     //to convert into decimal
console.log('Ex2 : out2 : ', out2);

///////////////// filter :: for filtering out the elements of the array on the basis of some condition(T/F) :: Returns a new array.
const arr2 = [2,1,4,3];
const new_arr2 = arr2.filter((value) => {
    return value > 3;
})
console.log(new_arr2);

// Example3 : Filter
const ex3 = [5, 1, 3, 2, 6];
function isOdd(x){
    return x % 2 !== 0;
}
const out3 = ex3.filter(isOdd);
console.log('Ex3 : out3 : ', out3);

// Example4 : Filter
const ex4 = [5, 1, 3, 2, 6];
const out4 = ex3.filter((x) => x > 3);
console.log('Ex4 : out4 : ', out4);

///////////////// reduce :: for making a final value from all elements of the array :: Returns a single value.
const arr3 = [2, 1, 3, 4];
const sum = arr3.reduce((acc, value) => {
    return acc + value;
}, 100); //initial value can be modify from 0 to anything.
console.log(sum);

// Example5 : Reduce : max in the array
const ex5 = [5, 1, 3, 2, 6];
const max = ex5.reduce((acc, val) => {
    return Math.max(acc, val);
}, -Infinity);
console.log('Ex5 : out5(max) : ', max)
console.log('negaive infinity : ', -Infinity);

// Example6 : Real World Example
const users = [
    {firstName: 'akshay', lastName: 'saini', age: 24},
    {firstName: 'donald', lastName: 'trump', age: 24},
    {firstName: 'elon', lastName: 'musk', age: 24},
    {firstName: 'chintu', lastName: 'mintu', age: 24}
];
const fullNames = users.map((x) => {
    return x.firstName + " " + x.lastName;
})
console.log('List of full names from users : ' , fullNames);

// Example7 : Real World Example :: Good One!
const users2 = [
    {firstName: 'akshay', lastName: 'saini', age: 26},
    {firstName: 'donald', lastName: 'trump', age: 72},
    {firstName: 'elon', lastName: 'musk', age: 43},
    {firstName: 'chintu', lastName: 'mintu', age: 26}
];
// { 26 : 2, 72 : 1, 43 : 1}
const ex7 = users2.reduce((acc, val) => {
    if(acc[val.age]){
        acc[val.age] = acc[val.age] + 1;
    }else{
        acc[val.age] = 1;
    }
    return acc;
}, {});
console.log(ex7);

/////// Chaining of Map, Filter, Reduce
// Example8 : Real World Example :: Good One!
const users3 = [
    {firstName: 'akshay', lastName: 'saini', age: 26},
    {firstName: 'donald', lastName: 'trump', age: 72},
    {firstName: 'elon', lastName: 'musk', age: 43},
    {firstName: 'chintu', lastName: 'mintu', age: 26}
];
// { firstName list of age greter than 30}
// Way1 : by chaining
const ex8 = users3.filter(x => x.age > 30).map(y => y.firstName);
console.log(ex8);
// Way2 : by reduce function
const ex8_2 = users3.reduce((acc, val) => {
    if(val.age > 30){
        acc.push(val.firstName);
    }
    return acc;
}, [])
console.log(ex8_2);
