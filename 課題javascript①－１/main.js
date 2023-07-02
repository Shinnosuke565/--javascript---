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
//----------------------------------------------

//課題①-3
const text1 = ('===============================');
const text2 = ('現在持っているタスクの一覧');

function add() {
  console.log(text1);
  console.log(text2);
  console.log(text1);
}

add();

const tasks = [
  '散歩',
  '掃除',
  '買い物'
];

function showTaskList() {
  tasks.forEach((index, tasks,) => console.log(tasks, index,));
}

showTaskList();

const result = prompt(
  '「確認、追加、削除、終了」の4つのいずれかを入力してください');

window.alert = alert(
  '「タスク」が追加されました');
  
add();

tasks.push(result);
showTaskList();
