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
let result = prompt("「確認、追加、削除、終了」の4つのいずれかを入力してください");
console.log(result);


const array = [0, 1, 2];

for(var i = 0; i < 3; i++) {
  console.log(array[i]);
}


const tasks = ['掃除', '買い物', '散歩'];
tasks.forEach((tasks, index) => console.log(index, tasks));



