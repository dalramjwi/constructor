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
  //숫자로만
  set water(value) {
    if (typeof value === "number") {
      this._water = value;
    } else {
      console.error("숫자 아님");
    }
  }
  //리터
  get water() {
    return this._water + "mL";
  }
}
let test = new makeCoffee("메롱", 1, "설탕", "우유");
console.log(test.wondoo);
console.log(test.water);
