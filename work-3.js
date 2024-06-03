function workThree(a, b) {
  let local = {};
  local[a] = a;
  local[b] = b;
  return local;
}
console.log(workThree("ㅇ", "22"));
