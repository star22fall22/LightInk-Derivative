function showRom(name, hira) {
    var rom = "";

    switch (hira) {
        case "あ":
            rom = "a"; break;
        case "い":
            rom = "i"; break;
        case "う":
            rom = "u"; break;
        case "え":
            rom = "e"; break;
        case "お":
            rom = "o"; break;
        case "か":
            rom = "ka"; break;
        case "き":
            rom = "ki"; break;
        case "く":
            rom = "ku"; break;
        case "け":
            rom = "ke"; break;
        case "こ":
            rom = "ko"; break;
        case "さ":
            rom = "sa"; break;
        case "し":
            rom = "shi"; break;
        case "す":
            rom = "su"; break;
        case "せ":
            rom = "se"; break;
        case "そ":
            rom = "so"; break;
        case "た":
            rom = "ta"; break;
        case "ち":
            rom = "chi"; break;
        case "つ":
            rom = "tsu"; break;
        case "て":
            rom = "te"; break;
        case "と":
            rom = "to"; break;
        case "な":
            rom = "na"; break;
        case "に":
            rom = "ni"; break;
        case "ぬ":
            rom = "nu"; break;
        case "ね":
            rom = "ne"; break;
        case "の":
            rom = "no"; break;
        case "は":
            rom = "ha"; break;
        case "ひ":
            rom = "hi"; break;
        case "ふ":
            rom = "fu"; break;
        case "へ":
            rom = "he"; break;
        case "ほ":
            rom = "ho"; break;
        case "ま":
            rom = "ma"; break;
        case "み":
            rom = "mi"; break;
        case "む":
            rom = "mu"; break;
        case "め":
            rom = "me"; break;
        case "も":
            rom = "mo"; break;
        case "や":
            rom = "ya"; break;
        case "ゆ":
            rom = "yu"; break;
        case "よ":
            rom = "yo"; break;
        case "ら":
            rom = "ra"; break;
        case "り":
            rom = "ri"; break;
        case "る":
            rom = "ru"; break;
        case "れ":
            rom = "re"; break;
        case "ろ":
            rom = "ro"; break;
        case "わ":
            rom = "wa"; break;
        case "を":
            rom = "o"; break;
        case "ん":
            rom = "n"; break;
    }

    document.getElementById(name).value = rom;
}

function getHira(num) {
    switch (num) {
        case 1:
            return "あ";
        case 2:
            return "い";
        case 3:
            return "う";
        case 4:
            return "え";
        case 5:
            return "お";
        case 6:
            return "か";
        case 7:
            return "き";
        case 8:
            return "く";
        case 9:
            return "け";
        case 10:
            return "こ";
        case 11:
            return "さ";
        case 12:
            return "し";
        case 13:
            return "す";
        case 14:
            return "せ";
        case 15:
            return "そ";
        case 16:
            return "た";
        case 17:
            return "ち";
        case 18:
            return "つ";
        case 19:
            return "て";
        case 20:
            return "と";
        case 21:
            return "な";
        case 22:
            return "に";
        case 23:
            return "ぬ";
        case 24:
            return "ね";
        case 25:
            return "の";
        case 26:
            return "は";
        case 27:
            return "ひ";
        case 28:
            return "ふ";
        case 29:
            return "へ";
        case 30:
            return "ほ";
        case 31:
            return "ま";
        case 32:
            return "み";
        case 33:
            return "む";
        case 34:
            return "め";
        case 35:
            return "も";
        case 36:
            return "や";
        case 37:
            return "ゆ";
        case 38:
            return "よ";
        case 39:
            return "ら";
        case 40:
            return "り";
        case 41:
            return "る";
        case 42:
            return "れ";
        case 43:
            return "ろ";
        case 44:
            return "わ";
        case 45:
            return "を";
        case 46:
            return "ん";
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