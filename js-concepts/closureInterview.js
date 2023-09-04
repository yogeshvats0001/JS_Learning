// Closure Example
// function outest(){
//     var c = 20
//     function outer(b){
//         function inner(){
//             console.log(a, b, c)
//         }
//         // a = 10
//         return inner
//     }
//     return outer
// }
// var a = 90
// outest()('Hello')()

// Data Hiding and Encapsulation
// function counter(){
//     var count = 0
//     function incCount(){
//         count++
//         console.log(count)
//     }
// }
// counter()
// console.log(count)


// Different reference - Different Function's Behaviour
// function counter(){
//     var count = 0
//     function incCount(){
//         count++
//         console.log(count)
//     }
//     return incCount
// }
// var counter1 = counter()
// counter1()
// counter1()
// counter1()
// var counter2 = counter()
// counter2()
// counter2()


// Function Constructor
function Counter(){
    var count = 0
    this.incCount = function(){
        count++
        console.log(count)
    }
    this.decCount = function(){
        count--
        console.log(count)
    }
}
var counter3 = new Counter()
counter3.incCount()
counter3.incCount()
counter3.decCount()