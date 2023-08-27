function convertDPI() {
    var alert123 = false;
    var alert4 = false;

    //block 1
    var mm_1 = document.getElementById("mm_1").value;
    var dpi_1 = document.getElementById("dpi_1").value;
    if (mm_1 >= 0 && dpi_1 > 0){
        document.getElementById("px_1").value = (mm_1 * dpi_1 / 25.4).toFixed(0) + " px";
    }
    else{
        alert123 = true;
    }

    //block 2
    var px_2 = document.getElementById("px_2").value;
    var dpi_2 = document.getElementById("dpi_2").value;
    if (px_2 >= 0 && dpi_2 > 0){
        document.getElementById("mm_2").value = (px_2 / (dpi_2) * 25.4).toFixed(1) + " mm";
    }
    else{
        alert123 = true;
    }

    //block 3
    var mm_3 = document.getElementById("mm_3").value;
    var px_3 = document.getElementById("px_3").value;
    if (mm_3 >= 0 && px_3 >= 0){
        document.getElementById("dpi_3").value = (px_3 / (mm_3 / 25.4)).toFixed(1) + " dpi";
    }
    else{
        alert123 = true;
    }

    //block 4
    var h_4 = document.getElementById("h_4").value;
    var w_4 = document.getElementById("w_4").value;
    var back_4 = document.getElementById("back_4").value;
    var fold_4 = document.getElementById("fold_4").value;
    var bleed_4 = document.getElementById("bleed_4").value;
    var dpi_4 = document.getElementById("dpi_4").value;
    var choose = document.getElementById("print_type").value;

    if (h_4 > 0 && w_4 > 0 && dpi_4 > 0 && back_4 >= 0 && fold_4 >= 0 && bleed_4 >= 0 && choose != "choose"){
        var hh = h_4 + bleed_4 * 2;
        var ww = w_4 + bleed_4 * 2;
        if (choose == "twoPage"){
            ww = ww + w_4;
            ww = ww + back_4;
        }
        var hh_px = (hh * dpi_4 / 25.4).toFixed(0);
        var ww_px = (ww * dpi_4 / 25.4).toFixed(0);
        document.getElementById("outputBox").value = "高度 " + hh_px + " px，寬度 " + ww_px + " px。";
    }else{
        alert4 = true;
    }
    
    if (alert123){
        alert("解析度必須大於零，紙張尺寸與檔案大小必須大於或等於零。");
    }
    if (alert4){
        alert("高度、寬度、解析度必須大於零，書背尺寸、折口尺寸、出血尺寸必須大於或等於零。");
    }
}
