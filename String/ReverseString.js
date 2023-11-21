//Problem Statement
//  Input -> "hello"
// Output -> "olleh"

function reverstring(string) {
  let array = string.split("").reverse();
  let newStr = array.join('');
  console.log(newStr);
}

reverstring("hello");
