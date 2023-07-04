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

tasks = [
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

//定数を定義する
// const text1 = ('===============================');
// const text2 = ('現在持っているタスクの一覧');

// //関数を定義する
// function add() {
//   console.log(text1);
//   console.log(text2);
//   console.log(text1);
// }

// //コンソールに出力
// add();

// //タスク一覧
// const tasks = [
//   '散歩',
//   '掃除',
//   '買い物'
// ];

// //関数を定義する
// const showTaskList = () => {
//   tasks.forEach((index, tasks,) => console.log(tasks, index,));
// };

// //現在のタスク一覧をコンソールに出力
// showTaskList();

// const result = prompt(
//   '「確認、追加、削除、終了」の4つのいずれかを入力してください');

//タスクに追加したタスク一覧をコンソールに出力
// tasks.
// tasks
// tasks.push(result);
// showTaskList();
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

//課題③
// タスクのIDと内容を管理するための配列
let tasks = [];

// 追加ボタンが押されたときのイベントリスナー
document.getElementById('addButton').addEventListener('click', () => {
  const taskName = document.getElementById('addTask').value; // 追加するタスクの名前を取得

  // tasks配列に新たなタスクを追加
  tasks.push({
    id: tasks.length, // 現在のtasks配列の長さをIDとする（0からスタート）
    name: taskName, // タスクの名前
    state: '作業中' // 初期状態は"作業中"
  });

  document.getElementById('addTask').value = ''; // 入力欄を空にする

  displayTasks(); // タスク一覧を表示更新
});

// タスク一覧を表示する関数
function displayTasks() {
  const tbody = document.querySelector('#todoTable tbody');
  tbody.innerHTML = ''; // tbodyの中身を空にする（初期化）

  tasks.forEach((task, index) => {
    const row = tbody.insertRow(-1); // 新しい行を最後に追加
    row.insertCell(-1).innerText = index; // "ID"列
    row.insertCell(-1).innerText = task.name; // "コメント"列
    const stateCell = row.insertCell(-1); // "状態"列

    // 状態ボタンの作成
    const stateButton = document.createElement('button');
    stateButton.innerText = task.state;
    stateCell.appendChild(stateButton);
  });
}
