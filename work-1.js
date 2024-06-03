// * 이 파일은 기본 함수 연습 파일이다.
// * 목적은 함수를 조금 더 이해하려고 한다.
// * 매개변수가 객체인 경우가 아래에 작성될 것이다.
function workOne(a, b) {
  //* logic : 매개변수 두 개를 받은 다음
  //* logic : return은 객체
  let localVariable = {};
  if (typeof a === "string") {
    if (typeof b === "string") {
      //이렇게 조건문 중첩도 가능하지만, $$, || 연산자 혹은 예외 처리 (try, catch, ...finally 등) 사용 가능
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
    } else {
      console.error("조건 해당되지 않음");
    }
  } else {
    console.error("조건 해당되지 않음");
  }
  //* condition : 매개변수 모두 문자열이어야 한다.
}
oj = {
  키: "value",
};
console.log(workOne("1", "2"));
// console.log(Object.keys(oj));
