// 분류규격 라면 볶음면 {
//   재료들(라면종류, 물, 추가재료) {
//     라면종류: 라면종류;
//     물 : 물;
//     추가재료 : 추가재료;
//   }
// }
class ramen {
  constructor(ramenName, ramenWater, addFood) {
    (this.ramenName = ramenName),
      (this.ramenWater = ramenWater),
      (this.addFood = addFood);
  }
  set ramenName(ramenName) {
    if (ramenName !== "진순") {
      console.error("올바른 이름이 아닙니다.");
    }
  }
}
let test = new ramen("진매", "물", "치즈");
console.log(test);
