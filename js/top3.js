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
  
