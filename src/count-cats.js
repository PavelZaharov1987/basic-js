module.exports = function countCats(backyard) {
  let count = 0;
  for (let i = 0; i <= backyard.length-1; i++) {
    let arr = backyard[i];
    for (let j = 0; j <= arr.length-1; j++) {
      if (arr[j] === "^^") {
        count += 1;
      }
    }
  }
  return count;
};
