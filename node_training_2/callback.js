/*Blocking Code Example*/

// var fs = require("fs");
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");













/* Non-Blocking Code Example */

// var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });

// console.log("Program Ended");


// These two examples explain the concept of blocking and non-blocking calls.

// The first example shows that the program blocks until it reads the file and then only 
// it proceeds to end the program.

// The second example shows that the program does not wait for file reading 
// and proceeds to print "Program Ended" and at the same time, the program without blocking continues reading 
// the file.













/* SECOND Example

add() function is called with arguments a, b 
and callback, callback will be executed just  
after ending of add() function 
*/

// function add(a, b, callback) {
//     callback();
//     console.log(`The sum of ${a} and ${b} is ${a + b}.` + "<br>");
// }

// disp() function is called just 
// after the ending of add() function 

// function disp() {
//     console.log('This must be printed after addition');
// }

// Calling add() function 
// add(5, 6, disp);


