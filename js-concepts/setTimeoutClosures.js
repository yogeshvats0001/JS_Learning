// basic example of setTimeout
// function x(){
//     var i = 100
//     setTimeout(function (){
//         console.log(i)
//     }, 3000)
//     console.log('Hello World!')
// }
// x()

// digital watch with the help of setInterval
// let timeHeading = document.getElementById('timeHeading')
// function updateClock(){
//     const now = new Date()
//     const hour = now.getHours()
//     const minute = now.getMinutes()
//     const second = now.getSeconds()
//     const finalTime = `${hour} : ${minute} : ${second}`
//     timeHeading.innerText = finalTime
// }
// setInterval(updateClock, 1000)

// Most tricky JS question
// function x(){
//     for(var i = 1; i < 6; i++){
//         setTimeout(function(){
//             console.log(i)
//         }, i * 1000)
//     }
//     console.log("Hey!")
// }
// x()

// Most tricky JS question : Solution1 :: Change var by let as it is block scoped.
// function x(){
//     for(let i = 1; i < 6 ; i++){
//         setTimeout(function(){
//             console.log(i)
//         }, i* 1000)
//     }
// }
// x()

// Most tricky JS question : Solution2 :: Create a new function with new copy of the i as x.
// function x(){
//     for(let i = 1; i < 6 ; i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x)
//             }, i * 1000)
//         }
//         close(i)
//     }
// }
// x()

// Most tricky JS question : Solution3
// function x(){
//     var i = 1
//     for (let j = 1; j<6; j++){
//         setTimeout(function (){
//             console.log(i)
//             i += 1
//         }, j * 1000)
//     }
// }
// x()

// TRUST ISSUES WITH SETTIMEOUT()
console.log('start');
setTimeout(function cb(){
    console.log('Callback');
}, 5000);
console.log('end');

let startTime = new Date().getTime();
let endTime = startTime;
while(endTime - startTime < 10000){
    endTime = new Date().getTime();
}
console.log('while ends');