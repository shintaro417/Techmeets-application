var start = false;//スタートボタンのフラグ
var times = 0;//番号を引いた回数
var shuffleId;//setInterval用の変数
var nums = [];//ビンゴ用の番号を格納する配列

for(i = 1; i <= 20; i++){//1~20までの番号を配列に追加
    nums.push(i);//配列numsに数値データを追加する。
}

//配列の中身をランダムに並び替え
var sorted = function(){return Math.random()-.5};//Mathオブジェクトのrandom()メソッド:0から1未満の数字を出す
nums.sort(sorted);//

//配列から値を取り出して#numに表示
function bingo(){
    var i = nums[times];
    $('#number').text(i);
    $('#number2').append('<li>' + i + '</li>');
    times++;
    console.log(times);
}

//STARTボタンを押した後のシャッフルシーン用
function shuffle(){
    shuffleId = setInterval(function(){
        var randomNum = 10 + Math.floor(Math.random() * 90);
        $('#number').text(randomNum);
    },30);
}

$(function(){
    
    //ボタン押下時のイベントibennto
    $('#button').on('click',function(){
        
        //19回目まで、スタートボタンをストップボタンに切り替え
        if(start == false && times <= 19){
            $(this).text('STOP');
            shuffle();
            start = true;
            
        //19回目まで、ストップボタンをスタートボタンに切り替えkirikae    
        }else if(times < 19){
            $(this).text('START');
            clearInterval(shuffleId);
            bingo();
            start = false;
        //20回目(最後)のシャッフル時のボタン処理
        }else if(start == true && times == 20){
            $(this).text('END');
            clearInterval(shuffleId);
            bingo();
        }
    });
});
