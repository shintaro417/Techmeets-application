$(function(){
    $("#fade").hide();//hide:指定した要素を非表示にする
    $(window).scroll(function(){//スクロールした時に関数を発動
        //$(window).scrollTop():ブラウザ全体のスクロール位置を取得(現在位置を取得)。 ('body').height:body要素の高さを取得する。 
        if($(window).scrollTop() > ($(window).height() - $('body').height()) / 2){
            $("#fade").fadeIn("slow");
        }else{
            $("#fade").fadeOut("slow");
        }
    });
    $("#fade").click(function(){//id:fadeをクリックしたら、関数を発動する
        //animate:指定した要素のアニメーションを実行する。今回はscrollTop:0、つまりページの最上部へ移動するアニメーションを示す。
       $("html,body").animate({scrollTop:0},"slow");
    });
});

