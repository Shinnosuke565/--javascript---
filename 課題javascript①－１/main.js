'use strict';
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
console.log ('======================================')
console.log ('現在持っているタスクの一覧')
console.log ('======================================')

const tasks = ['0: 散歩', '1: 掃除', '2: 買い物',] 

for(let i = 0; i < 1; i++) {
  tasks.forEach(( tasks, ) => console.log( tasks ));
  
}

const result = prompt('「確認、追加、削除、終了」の4つのいずれかを入力してください');

console.log('3: ' + result);

tasks.push = (result);







