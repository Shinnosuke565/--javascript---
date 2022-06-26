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
function add() {
  const text1 = ('===============================');
  const text2 = ('現在持っているタスクの一覧');
  const text3 = ('===============================');
  console.log(text1);
  console.log(text2);
  console.log(text3);
}

add();
//タスク一覧
function index() {
  let tasks = ['散歩', '掃除', '買い物',] 
  tasks.forEach((index, tasks,) => console.log(tasks, index,));
}

index();

//追加入力するタスク一覧を表示する
const result = prompt('「確認、追加、削除、終了」の4つのいずれかを入力してください');

add();

//タスクが追加されたら表示する
window.alert = alert('「タスク」が追加されました');

index()

let tasks = ['散歩', '掃除', '買い物'] 

console.log(result);