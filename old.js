function old(a, b) {
  this.a = a;
  this.b = b;
}
let test = new old(1, 2);
console.log(test);

class NewOld {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}
let newStyle = new NewOld(1, 2);
console.log(newStyle);
