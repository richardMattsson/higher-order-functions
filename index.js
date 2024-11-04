// const call = function (g) {
//   g();
// };
// call(alert);
// call(prompt);
// function g() {
//   let string = "Hello World!";
//   return string;
// }
// function f() {
//   return g;
// }
// console.log(f()());

// function forEach(a, f) {
//   for (let i = 0; i < a.length; i++) {
//     f(a[i]);
//   }
// }
// forEach([1, 2, 3], alert);

// function find(a, f) {
//   for (let i = 0; i < a.length; i++) {
//     if (f(a[i]) === true) {
//       return a[i];
//     }
//   }
// }
// console.log(
//   find([1, 2, 3], function (n) {
//     return n > 2;
//   })
// );

// console.log(find(["Hej", "Hejdå"], (s) => s.length === 5));

function filter(a, f) {
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    if (f(a[i]) === true) {
      newArray.push(a[i]);
    }
  }
  return newArray;
}

console.log(filter([5, 10, 15], (value) => value !== 5));
