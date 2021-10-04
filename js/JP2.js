function showRom(name, hira) {
    var rom = "";

    switch (hira) {
        case "ア":
            rom = "a"; break;
        case "イ":
            rom = "i"; break;
        case "ウ":
            rom = "u"; break;
        case "エ":
            rom = "e"; break;
        case "オ":
            rom = "o"; break;
        case "カ":
            rom = "ka"; break;
        case "キ":
            rom = "ki"; break;
        case "ク":
            rom = "ku"; break;
        case "ケ":
            rom = "ke"; break;
        case "コ":
            rom = "ko"; break;
        case "サ":
            rom = "sa"; break;
        case "シ":
            rom = "shi"; break;
        case "ス":
            rom = "su"; break;
        case "セ":
            rom = "se"; break;
        case "ソ":
            rom = "so"; break;
        case "タ":
            rom = "ta"; break;
        case "チ":
            rom = "chi"; break;
        case "ツ":
            rom = "tsu"; break;
        case "テ":
            rom = "te"; break;
        case "ト":
            rom = "to"; break;
        case "ナ":
            rom = "na"; break;
        case "ニ":
            rom = "ni"; break;
        case "ヌ":
            rom = "nu"; break;
        case "ネ":
            rom = "ne"; break;
        case "ノ":
            rom = "no"; break;
        case "ハ":
            rom = "ha"; break;
        case "ヒ":
            rom = "hi"; break;
        case "フ":
            rom = "fu"; break;
        case "ヘ":
            rom = "he"; break;
        case "ホ":
            rom = "ho"; break;
        case "マ":
            rom = "ma"; break;
        case "ミ":
            rom = "mi"; break;
        case "ム":
            rom = "mu"; break;
        case "メ":
            rom = "me"; break;
        case "モ":
            rom = "mo"; break;
        case "ヤ":
            rom = "ya"; break;
        case "ユ":
            rom = "yu"; break;
        case "ヨ":
            rom = "yo"; break;
        case "ラ":
            rom = "ra"; break;
        case "リ":
            rom = "ri"; break;
        case "ル":
            rom = "ru"; break;
        case "レ":
            rom = "re"; break;
        case "ロ":
            rom = "ro"; break;
        case "ワ":
            rom = "wa"; break;
        case "ヲ":
            rom = "o"; break;
        case "ン":
            rom = "n"; break;
    }

    document.getElementById(name).value = rom;
}

function getHira(num) {
    switch (num) {
        case 1:
            return "ア";
        case 2:
            return "イ";
        case 3:
            return "ウ";
        case 4:
            return "エ";
        case 5:
            return "オ";
        case 6:
            return "カ";
        case 7:
            return "キ";
        case 8:
            return "ク";
        case 9:
            return "ケ";
        case 10:
            return "コ";
        case 11:
            return "サ";
        case 12:
            return "シ";
        case 13:
            return "ス";
        case 14:
            return "セ";
        case 15:
            return "ソ";
        case 16:
            return "タ";
        case 17:
            return "チ";
        case 18:
            return "ツ";
        case 19:
            return "テ";
        case 20:
            return "ト";
        case 21:
            return "ナ";
        case 22:
            return "ニ";
        case 23:
            return "ヌ";
        case 24:
            return "ネ";
        case 25:
            return "ノ";
        case 26:
            return "ハ";
        case 27:
            return "ヒ";
        case 28:
            return "フ";
        case 29:
            return "ヘ";
        case 30:
            return "ホ";
        case 31:
            return "マ";
        case 32:
            return "ミ";
        case 33:
            return "ム";
        case 34:
            return "メ";
        case 35:
            return "モ";
        case 36:
            return "ヤ";
        case 37:
            return "ユ";
        case 38:
            return "ヨ";
        case 39:
            return "ラ";
        case 40:
            return "リ";
        case 41:
            return "ル";
        case 42:
            return "レ";
        case 43:
            return "ロ";
        case 44:
            return "ワ";
        case 45:
            return "ヲ";
        case 46:
            return "ン";
    }
}


function checkAns() {
    var hira = document.getElementById("myQ").value;
    showRom("myA", hira);
}

function nextQues() {
    document.getElementById("myA").value = "";
    var num = Math.floor(Math.random() * 4600 % 46) + 1;
    document.getElementById("myQ").value = getHira(num);
}

function keyFunction() {
    if (event.keyCode == 39)
        nextQues();
    if (event.keyCode == 40)
        checkAns();

    //alert("Key code = " + event.keyCode);
}
document.onkeydown = keyFunction;