var start = false;//スタートボタンのフラグ
var times = 0;//番号を引いた回数
var shuffleId;//setInterval用の変数
var nums = [];//ビンゴ用の番号を格納する配列

for(i = 1; i <= 20; i++){//1~20までの番号を配列に追加
    nums.push(i);//配列numsに数値データを追加する。
}

//配列の中身をランダムに並び替え
var narabikae = function(){return Math.random()-.5};//Mathオブジェクトのrandom()メソッド:0~1の数字を弾き出す
nums.sort(narabikae);//.sortで配列を並び替える

//配列から値を取り出して#numに表示
function bingo(){
    var i = nums[times];
    $('#number').text(i);//$(''):id属性のnumber要素を指定する。.textはテキスト情報の取得・追加・変更 id:numberの値をiに変更する
    $('#number2').append('<li>' + i + '</li>');//.appendは引数で指定したコンテンツを追加する。 id:number2にi:数字を出力する
    times++;//times + 1
    console.log(times);//変数timesを出力
}

//STARTボタンを押した後のシャッフルシーン用
function shuffle(){
    shuffleId = setInterval(function(){//setInterval 関数、処理間隔 shufflIdにsetIntervalの処理を代入する。
        var randomNum = 10 + Math.floor(Math.random() * 90);//ランダムに数字を出す。
        $('#number').text(randomNum);//id:numberの値を変数randomNumの値に変更
    },30);
}

$(function(){
    
    //ボタン押下時のイベント
    $('#button').on('click',function(){//id:buttonのタブをクリックした時に、関数を発動する
        
        //19回目まで、スタートボタンをストップボタンに切り替え
        if(start == false && times <= 19){
            $(this).text('STOP');//id:buttonの値をSTOPに変更
            shuffle();//shuffle関数を発動する
            start = true;//startをtrueにする。
            
        //19回目まで、ストップボタンをスタートボタンに切り替え   
        }else if(times < 20){
            $(this).text('START');
            clearInterval(shuffleId);//clearInterval:タイマー処理を止める  shuffleId、つまりsetIntervalの処理を止める
            bingo();//bingo関数を発動する
            start = false;
        //20回目(最後)のシャッフル時のボタン処理
        }else if(start == false && times == 20){
            $(this).text('END');
            clearInterval(shuffleId);
            bingo();
            alert("最後の数字");
        }
    });
});