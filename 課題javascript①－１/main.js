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

//定数を定義する
const text1 = ('===============================');
const text2 = ('現在持っているタスクの一覧');

//関数を定義する
function add() {
  console.log(text1);
  console.log(text2);
  console.log(text1);
}

//コンソールに出力
add();

//タスク一覧
let tasks = [
  '散歩',
  '掃除',
  '買い物'
];

//関数を定義する
function showTaskList() {
  tasks.forEach((index, tasks,) => console.log(tasks, index,));
}

//コンソールに出力
showTaskList();

//追加入力するタスク一覧を表示する
const result = prompt(
  '「確認、追加、削除、終了」の4つのいずれかを入力してください');

//タスクが追加されたら表示する
window.alert = alert(
  '「タスク」が追加されました');
  
//コンソールに出力
add();

//タスクに追加したタスク一覧をコンソールに出力
tasks.push(result);
showTaskList();