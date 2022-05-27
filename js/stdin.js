// console.log(process);
// 取得出来る状態にするよ
process.stdin.resume();
// console.log(process.stdin.resume());
// 文字コード
process.stdin.setEncoding('utf8');

// 取得していく
// 複数取得するための配列初期化
var lines = [];
// reader変数を作り、readlineモジュールの「createInterface」メソッドに先ほど作ったストリーム情報を渡す
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
// 配列linesにlineを追加
reader.on('line', (line) => {
  lines.push(line);
  console.log(line);
});
// 閉じる
reader.on('close', () => {
  console.log(lines);
});


// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', function (chunk) {
//   var line = chunk.toString();
//   console.log("XXXXXX");
// });