//Count Unique Number

//  [1,1,2,2,3,4,4,5,7,8,8]
// Output --> 8

//SOLUTION
function CountUniqueNumber(array) {
  if (array.length > 0) {
    let i = 0;

    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Length must be greater than 0");
  }
}

const result = CountUniqueNumber([1, 1, 2, 2, 3, 4, 4, 5, 7, 8, 8]);
console.log(result);
