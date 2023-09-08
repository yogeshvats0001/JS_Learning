const radius = [3, 1, 4, 2];
const area = function(r){
    return Math.PI * r * r;
}
console.log('map', radius.map(area));

//polyfil of map (higher order function of JS)
Array.prototype.calculate = function(callBackFunc){
    const output = [];
    for(let i = 0; i < this.length; i++){
        output.push(callBackFunc(this[i]));
    }
    return output;
}
console.log('polyfil', radius.calculate(area));
// Now we can use arr.calculate() anywhere in the program.