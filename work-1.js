// * 이 파일은 기본 함수 연습 파일이다.
// * 목적은 함수를 조금 더 이해하려고 한다.
// * 매개변수가 객체인 경우가 아래에 작성될 것이다.
function workOne(a, b) {
  //* logic : 매개변수 두 개를 받은 다음
  //* logic : return은 객체
  let localVariable = {};
  localVariable = { [a]: b };
  /**동료의 방법
   * localVariable[a] = b;
   */
  // localVariable = {
  //   a: a,
  //   b: b,
  // };
  localVariable[a] = a;
  localVariable[b] = b;
  return localVariable;
}
oj = {
  키: "value",
};
console.log(workOne("객체 key", "객체 value"));
// console.log(Object.keys(oj));
