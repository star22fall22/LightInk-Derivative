

/* 抓印刷種類 */
function selectType(){
    const print_type = document.getElementById("print_type").value;
    const custom_title_words = document.getElementById("custom_title");
    const book_block = document.getElementById("book");
    const card_block = document.getElementById("card");
    const badge = document.getElementById("badge");

    // 根据所选选项的值执行相应的操作
    if (print_type == "choose") {
        custom_title_words.style.display = "none";
        book_block.style.display = "none";
        card_block.style.display = "none";
        badge.style.display = "none";
    } else if (print_type == "twoPage") {
        custom_title_words.style.display = "block";
        book_block.style.display = "block";
        card_block.style.display = "none";
        badge.style.display = "none";
    } else if (print_type == "onePage") {
        custom_title_words.style.display = "block";
        book_block.style.display = "none";
        card_block.style.display = "block";
        badge.style.display = "none";
    } else if (print_type == "circle") {
        custom_title_words.style.display = "block";
        book_block.style.display = "none";
        card_block.style.display = "none";
        badge.style.display = "block";
    }
}


// ['長方形或圓形', 稿寬, 稿高, 直參考線1位置, 直參考線2位置, 橫參考線1位置, 橫參考線2位置]
function getAnswer(){
    const print_type = document.getElementById("print_type").value;
    const answer = document.getElementById("answer");

    if (print_type == "choose"){
        return null;
    } else if (print_type == "circle"){
        //圓形徽章
        const custom_diameter_bd = document.getElementById("custom_diameter_bd").value;
        const custom_bleed_bd = document.getElementById("custom_bleed_bd").value;
        const custom_dpi_bd = document.getElementById("custom_dpi_bd").value;
        if ((Number(custom_diameter_bd) <= 0) || (Number(custom_bleed_bd) < 0) || (Number(custom_dpi_bd) <= 0)){
            alert("稿件直徑須大於零、出血尺寸須大於等於零、解析度須大於零");
            answer.value = "檔案尺寸";
            return null;
        }
        ans_w = Math.ceil((Number(custom_diameter_bd) + 2 * Number(custom_bleed_bd) ) / 25.4 * Number(custom_dpi_bd));
        ans_h = ans_w;
        answer.value = "寬度 " + String(ans_w) + " px；高度 " + String(ans_h) + " px";
        return ['bd'];
        //畫布怎麼畫圓形?

    } else if (print_type == "onePage") {
        //卡片明信片海報
        const custom_height_c = document.getElementById("custom_height_c").value;
        const custom_width_c = document.getElementById("custom_width_c").value;
        const custom_bleed_c = document.getElementById("custom_bleed_c").value;
        const custom_dpi_c = document.getElementById("custom_dpi_c").value;
        if ((Number(custom_height_c) <= 0) || (Number(custom_width_c) <= 0) || (Number(custom_bleed_c) < 0) || (Number(custom_dpi_c) <= 0)){
            alert("稿件寬度高度須大於零、出血尺寸須大於等於零、解析度須大於零");
            answer.value = "檔案尺寸";
            return null;
        }
        ans_w = Math.ceil((Number(custom_width_c) + 2 * Number(custom_bleed_c) ) / 25.4 * Number(custom_dpi_c));
        ans_h = Math.ceil((Number(custom_height_c) + 2 * Number(custom_bleed_c) ) / 25.4 * Number(custom_dpi_c));
        answer.value = "寬度 " + String(ans_w) + " px；高度 " + String(ans_h) + " px";

        ref_horizon_1 = Math.ceil(Number(custom_bleed_c) / 25.4 * Number(custom_dpi_c));
        ref_horizon_2 = ans_w - ref_horizon_1;
        ref_vertical_1 = ref_horizon_1;
        ref_vertical_2 = ans_h - ref_vertical_1;
        
        return ['c', ans_w, ans_h, ref_horizon_1, ref_horizon_2, ref_vertical_1, ref_vertical_2];
    } else if (print_type == "twoPage"){
        //書封
        const custom_width_b = document.getElementById("custom_width_b").value;
        const custom_height_b = document.getElementById("custom_height_b").value;
        const custom_back_b = document.getElementById("custom_back_b").value;
        const custom_fold_b = document.getElementById("custom_fold_b").value;
        const custom_bleed_b = document.getElementById("custom_bleed_b").value;
        const custom_dpi_b = document.getElementById("custom_dpi_b").value;
        if ((Number(custom_height_b) <= 0) || (Number(custom_width_b) <= 0) || Number(custom_back_b) < 0 || Number(custom_fold_b) < 0 || (Number(custom_bleed_b) < 0) || (Number(custom_dpi_b) <= 0)){
            alert("稿件寬度高度須大於零、書背尺寸與折口尺寸須大於零、出血尺寸須大於等於零、解析度須大於零");
            answer.value = "檔案尺寸";
            return null;
        }
        ans_w = Math.ceil((Number(custom_width_b) + Number(custom_back_b) + 2 * Number(custom_fold_b) + 2 * Number(custom_bleed_b) ) / 25.4 * Number(custom_dpi_b));
        ans_h = Math.ceil((Number(custom_height_b) + 2 * Number(custom_bleed_b) ) / 25.4 * Number(custom_dpi_b));
        answer.value = "寬度 " + String(ans_w) + " px；高度 " + String(ans_h) + " px";

        ref_horizon_1 = Math.ceil(Number(custom_bleed_b) / 25.4 * Number(custom_dpi_b));
        ref_horizon_2 = Math.ceil(Number(custom_bleed_b) + Number(custom_fold_b) / 25.4 * Number(custom_dpi_b));
        ref_horizon_3 = Math.ceil(Number(custom_bleed_b) + Number(custom_fold_b) + Number(custom_width_b) / 25.4 * Number(custom_dpi_b));
        ref_horizon_4 = ans_w - ref_horizon_3;
        ref_horizon_5 = ans_w - ref_horizon_2;
        ref_horizon_6 = ans_w - ref_horizon_1;
        ref_vertical_1 = ref_horizon_1;
        ref_vertical_2 = ans_h - ref_vertical_1;

        return ['b', ans_w, ans_h, ref_horizon_1, ref_horizon_2, ref_horizon_3, ref_horizon_4, ref_horizon_5, ref_horizon_6, ref_vertical_1, ref_vertical_2];
    }
    return null;
}

createImg = function(){
    //開始轉圈圈
    var loader = document.getElementById("loader2");
    var overlay = document.getElementById("overlay")
    loader.style.display = "flex";
    overlay.style.display = "flex";

    let ref = getAnswer();
    if (ref == null){
        //轉圈圈結束
        overlay.style.display = "none";
        loader.style.display = "none";
        return null;
    }
    // 获取Canvas元素和上下文
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    if (ref[0] == 'c'){
        // 卡片明信片海報
        
        
    } else if (ref[0] == 'b'){
        //書封

    } else if (ref[0] == 'bd'){
        //圓形徽章

    }


    //展示圖片
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById("canvasCont").style.display = "unset";
    var myimg = document.getElementById('imgtest')
    myimg.src=dataURL

    // 可下載圖片
    const dwnImgButton = document.getElementById("dwnImgButton");
    dwnImgButton.disabled = false;

    //轉圈圈結束
    overlay.style.display = "none";
    loader.style.display = "none";

    return;
}


/*
createImg = function() {
    var loader = document.getElementById("loader2");
    var overlay = document.getElementById("overlay")
    loader.style.display = "flex";
    overlay.style.display = "flex";

    // 获取Canvas元素和上下文
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    //取得top3文字
    var top1 = document.getElementById("top1").value.substr(0,9);
    var top2 = document.getElementById("top2").value.substr(0,9);
    var top3 = document.getElementById("top3").value.substr(0,9);

    //取得主題
    var theme = document.getElementById("theme");
    var typesetting = document.getElementById("typesetting"); 

    // 创建一个Image对象来加载jpg底图
    const backgroundImage = new Image();
    backgroundImage.src = '../../img/tool-top3/'+String(theme.value)+'_' + String(typesetting.value) +'.jpg'; // 将文件名替换为您的底图文件名

    // 在图像加载完成后绘制它
    backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // 添加文字
        ctx.font = 'bold 72px 微軟正黑體';
        ctx.fillStyle = 'white';
        if (typesetting.value == 'books'){ //奇幻書屋
            ctx.fillText(top1, 250, 965); 
            ctx.fillText(top2, 250, 1275); 
            ctx.fillText(top3, 250, 1585); 
        }
        else if (typesetting.value == 'ticket'){ //長途車票
            ctx.fillText(top1, 250, 940); 
            ctx.fillText(top2, 250, 1240); 
            ctx.fillText(top3, 250, 1540); 
        }
        else if (typesetting.value == 'map'){ //心靈地圖
            ctx.fillText(top1, 235, 980); 
            ctx.fillText(top2, 325, 1275); 
            ctx.fillText(top3, 235, 1585); 
        }
        

        //展示圖片
        var dataURL = canvas.toDataURL('image/jpeg');
        document.getElementById("canvasCont").style.display = "unset";
        var myimg = document.getElementById('imgtest')
        myimg.src=dataURL

        // 可下載圖片
        const dwnButton = document.getElementById("dwnButton");
        dwnButton.disabled = false;

        //加載結束
        overlay.style.display = "none";
        loader.style.display = "none";

        //畫面滾到imgtest
        myimg.scrollIntoView({ behavior: 'smooth', block: 'start' });
        loader.style.display = "none";
    };
};

dwnImg = function() {
    // 创建一个 Date 对象，它将包含当前的日期和时间
    var currentDate = new Date();
    
    // 获取当前的年份、月份、日期、小时、分钟和秒
    var year = String(currentDate.getFullYear()).substr(2,2);
    var month = String(currentDate.getMonth() + 1).padStart(2, "0");; // 月份从 0 开始，所以要加 1
    var day = String(currentDate.getDate()).padStart(2, "0");;
    var hours = String(currentDate.getHours()).padStart(2, "0");;
    var minutes = String(currentDate.getMinutes()).padStart(2, "0");;
    var seconds = String(currentDate.getSeconds()).padStart(2, "0");;
    
    var canvas = document.getElementById('myCanvas');
    var dataURL = canvas.toDataURL('image/jpeg');
    var a = document.createElement('a');
    a.href = dataURL;
    a.download = 'top3_'+ year + month + day + hours + minutes + seconds + '.jpg';
    a.click();
    // var myimg = document.getElementById('imgtest')
    // myimg.src=dataURL

    canvas.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
  
*/