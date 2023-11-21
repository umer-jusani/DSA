// Problem - remove 76
// Input  => [30, 20, 45, 76, 20, 80]
// Output => [30, 20, 45, 20, 80]
// Remove 75

let data = [30, 20, 45, 76, 20, 80];

for (let i = 3; i < data.length; i++) {
  data[i] = data[i + 1];
}

const remove = data.pop();
console.log(data);
