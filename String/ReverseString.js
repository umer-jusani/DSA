//Problem Statement
//  Input -> "hello"
// Output -> "olleh"

function reverstring(string) {
  let array = string.split("").reverse();
  let newStr = array.join('');

  return newStr;
}

const Output = reverstring("hello");
console.log(Output)