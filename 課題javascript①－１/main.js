//課題①-1
// for (var i = 3; i <= 100 ; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz")
//   } else if (i % 3 == 0) {
//     console.log("Fizz")
//   } else if (i % 5 == 0) {
//     console.log("Buzz")
//   } else {
//     console.log(i  )
//   }
// }

//課題①-2
// let shutoken = prompt("日本の首都は？");
// if (shutoken === "東京") {
//   alert("正解です！");
// } else {
//   alert("不正解です！");
// }

//課題①-3
let input = prompt("「確認、追加、削除、終了」の4つのいずれかを入力してください");
var array = ["0 : 掃除", "1 : 買い物", "2 : 散歩"];

for(var i = 0; i < 4; i++) {
  console.log(array[i]);
}

console.log("0 : 掃除");
console.log("1 : 買い物");
console.log("2 : 散歩");
console.log("3 : " + input);

