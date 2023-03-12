//Declartions and Assignments
//declaration only - you havent assigned any value to i
var i;
console.log("i value is" ,i);//undefined

//you declared and assigned the value 10 to j
var j = 10;
console.log('j value is', j);

//what is javascript hoisting?

console.log('k value is', k); //undefined
var k = 10;
//the above code will not throw any error because javascript
//interpreter splits the declaration and assignments
//i.e. javascript 'hoists' your declaration to the top of their
//containing scope before execution


console.log('m value is',m);//ReferenceError: m is not defined
m = 10; // 'm' is not declared 






