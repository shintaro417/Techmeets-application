function calc(cmd){//引数に入力された値cmdが渡される関数calc
    if(cmd == "="){//もし、cmdが=だったら
        document.form.text.value = eval(document.form.text.value);//入力された値を式として評価したものを代入して、答えとして弾き出す
    }else if(cmd == "C"){//もし、cmdがCだったら
        document.form.text.value = "";//出力されている値を消す
    }else{//それら以外のcmdだったら
        document.form.text.value += cmd;//入力欄に表示されている値にcmdを加えて入力欄に表示する
    }
}