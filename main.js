// commanderモジュールをprogramとしてインポートする
const program = require("commander");
// fsモジュールをfsオブジェクトとしてインポートする
const fs = require("fs");

// ファイルパスをprogram.args配列から取り出す
program.parse(process.argv);
const filePath = program.args[0];

// ファイルをutf-8として非同期で読み込む
fs.readFile(filePath, {encoding: "utf-8"}, (err, file) =>{
    if(err){
        console.error(err.message);
        // 終了ステータス 1（一般的なエラー）としてプロセスを終了する
        process.exit(1);
        return;
    }else{
        console.log(file);
    }
})
