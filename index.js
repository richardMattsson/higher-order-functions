// const call = function (g) {
//   g();
// };
// call(alert);
// call(prompt);
function g() {
  let string = "Hello World!";
  return string;
}
function f() {
  return g;
}

console.log(f()());
