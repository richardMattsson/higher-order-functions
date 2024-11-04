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

function forEach(a, f) {
  for (let i = 0; i < a.length; i++) {
    f(a[i]);
  }
}
forEach([1, 2, 3], alert);
