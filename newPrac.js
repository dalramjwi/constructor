class ItsME {
  constructor(name, age, address, email, like, dislike) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
    this.like = like;
    this.dislike = dislike;
  }
  //* 규격 만들기
  set name(value) {
    if (typeof value === "string") {
      this._name = value;
    } else {
      console.error("문자열 아님");
    }
  }
  get name() {
    return "my name is " + this._name;
  }
  //숫자로만
  set age(value) {
    if (typeof value === "number") {
      this._age = value;
    } else {
      console.error("숫자 아님");
    }
  }
  get age() {
    return this.age + "세";
  }
}
let test = new ItsME(
  "dalramjwi",
  1,
  "tree",
  "dalramjwi.gmail.com",
  "sweet",
  "fish"
);
console.log(test);
