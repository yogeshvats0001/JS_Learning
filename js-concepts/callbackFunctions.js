//// Example of callback functions in JS
setTimeout(function(){
    console.log('timer')
}, 5000)
function x(z){
    console.log('x')
    z()
}
x(function y(){
    console.log('y')
})
//// argument's can't be called from here :: ReferenceError
y()
z()

// Event Listener
// document.getElementById('clickMe')
// .addEventListener('click', function xyz(){
//     console.log('Button clicked')
// })

// Closure Demo with Event Listener
// function addEvent(){
//     var count = 0
//     document.getElementById('clickMe')
//         .addEventListener('click', function xyz(){
//             console.log('Button clicked ', ++count)
// })
// }
// addEvent()
// addEvent()