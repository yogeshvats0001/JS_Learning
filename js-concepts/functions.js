// function statement aka function declaration
function a(){
    console.log('a is called')
}
a()

// function expression
var b = function(){
    console.log('b is called')
}
b()

// diff in function statement & expression :: HOISTING

// anonymous function :: don't have its own identity :: used when we want to use function as value
// function (){
//     console.log('anonymous function')
// }

// named function expression
var c = function xyz(){
    console.log(xyz)
}
c()
// xyz()

// Parameters vs Arguments :: 
function d(parameter){
    console.log(parameter)
}
d('argument')

// FIRST ORDER FUNCTION :: function as value/ parameter/ returned