// CLOSURES :: function along with its lexical scope forms a closure. 
// E.g1.,
// function x(){
//     var a = 10
//     function y(){
//         console.log(a)
//     }
//     y();
// }
// x();

// E.g2., two different functions
// function w(){
//     var a = 20
// }
// function z(){
//     console.log(a)
// }
// w()
// z()

// Invoke a function
function d(){
    var e = 90
    function f(){
        console.log(e)
    }
    return f;
}
var g = d()
console.log(g)
//...... after 1000 line
g()