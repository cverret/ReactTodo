// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(2, 4));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));
//
// var groupA = ['Chuck', 'Katharine'];
// var groupb = ['Dude'];
// var final = [3, ...groupA];
//
// console.log(final);
var person1 = ['chuck', 44];
var person2 = ['Katharine', 40];
//hi name you are age
function greet (name, age){
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person1);
greet(...person2);


var names = ['Mike', 'Joe'];
var final = ['Drew', ...names];

final.forEach(function(name){
  console.log(name);
});
