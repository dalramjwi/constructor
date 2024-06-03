class makeCoffee {
  constructor(wondoo, water, sugar, milk) {
    this.wondoo = wondoo;
    this.water = water;
    this.sugar = sugar;
    this.milk = milk;
  }
  //* 규격 만들기 : constructor 밖 class 안
  set wondoo(value) {
    if (typeof value === "string") {
      this._won = value;
    } else {
      console.error("문자열 아님");
    }
  }
}
let test = new makeCoffee("원두", "물", "설탕", "우유");
console.log(test);
