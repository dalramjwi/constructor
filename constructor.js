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
}
let test = new ramen("진순", "물", "치즈");
console.log(test);
