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
      this._wondoo = value;
    } else {
      console.error("문자열 아님");
    }
  }
  get wondoo() {
    return this._wondoo + "임";
  }
}
let test = new makeCoffee("메롱", "물", "설탕", "우유");
console.log(test.wondoo);
