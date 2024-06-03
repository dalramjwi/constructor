function old(a, b) {
  this.a = a;
  this.b = b;
}
let test = new old(1, 2);
console.log(test);
