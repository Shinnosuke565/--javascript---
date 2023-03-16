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
// const text1 = ('===============================');
// const text2 = ('現在持っているタスクの一覧');

//関数を定義する
// function add() {
//   console.log(text1);
//   console.log(text2);
//   console.log(text1);
// }

//コンソールに出力
// add();

//タスク一覧
// let tasks = [
//   '散歩',
//   '掃除',
//   '買い物'
// ];

//関数を定義する
// function showTaskList() {
//   tasks.forEach((index, tasks,) => console.log(tasks, index,));
// }

//コンソールに出力
// showTaskList();

//追加入力するタスク一覧を表示する
// const result = prompt(
//   '「確認、追加、削除、終了」の4つのいずれかを入力してください');

//タスクが追加されたら表示する
// window.alert = alert(
//   '「タスク」が追加されました');

//コンソールに出力
// add();

//タスクに追加したタスク一覧をコンソールに出力
// tasks.push(result);
// showTaskList();
//----------------------------------------------------

//課題①ー４
// //定数を定義する
// const text1 = ('=====================================');
// const text2 = ('現在持っているタスクの一覧');

// //関数を定義する
// function add() {
//   console.log(text1);
//   console.log(text2);
//   console.log(text1);
// }

// //関数をコンソールに出力
// add();

// //タスク一覧
// let tasks = [
//   '[内容]、机を片付ける[ジャンル]掃除',
//   '[内容]、牛乳を買う[ジャンル]買い物',
//   '[内容]、散歩する[ジャンル]運動'
// ]

// //関数を定義する
// function showTaskList() {
//   tasks.forEach((tasks,index) => console.log(index,tasks));
// }

// //コンソールに出力
// showTaskList();

// //追加入力するタスク一覧を表示する
// const result = prompt(
//   '「確認、追加、削除、終了」の４つのいずれかを入力してください');

// //追加入力するタスク入力を表示する
// const task = prompt(
//   'タスクを入力してください');

// //追加入力するジャンル入力を表示する
// const jenre = prompt(
//   'ジャンルを入力してください');

// //新しいタスクを追加する
// const Newtask = alert(
//   '新しいタスクを追加しました。');

// //コンソールに出力
// add();

// //追加したタスクに表示する
// let tasksList = [
//   '[内容]、'
// ]
// let jenreList = [
//   '[ジャンル]'
// ]

// //タスクに追加したタスク一覧をコンソールに出力
// tasks.push(tasksList + task + jenreList + jenre);
// showTaskList();

//-------------------------------------------------------------------------------------

//定数を定義する
const divider = '=====================================';
const taskHeader = '現在持っているタスクの一覧';
const addTaskMessage = '新しいタスクを追加しました。';

//現在のタスク一覧
let tasks = [
  '[内容]、机を片付ける[ジャンル]掃除',
  '[内容]、牛乳を買う[ジャンル]買い物',
  '[内容]、散歩する[ジャンル]運動',
];

//関数を定義する
function showTaskList() {
  console.log(divider);
  console.log(taskHeader);
  console.log(divider);
  tasks.forEach((task, index) => console.log(index, task));
}

//現在のタスク一覧をコンソールに出力
showTaskList();

//操作選択
let action = prompt('「確認、追加、削除、終了」の４つのいずれかを入力してください');

while (action !== '終了') {
  if (action === '確認') {
    showTaskList();
  } else if (action === '追加') {
    const task = prompt('タスクを入力してください');
    const genre = prompt('ジャンルを入力してください');
    tasks.push(`[内容]、${task}[ジャンル]${genre}`);
    alert(addTaskMessage);
  } else if (action === '削除') {
    const index = prompt('削除するタスクの番号を入力してください');
    if (index >= tasks.length || index < 0) {
      alert('存在しないタスク番号です。');
    } else {
      tasks.splice(index, 1);
      alert('タスクを削除しました。');
    }
  } else {
    alert('「確認、追加、削除、終了」の中から選択してください。');
  }
  action = prompt('「確認、追加、削除、終了」の４つのいずれかを入力してください');
}

alert('タスク管理アプリを終了します。');