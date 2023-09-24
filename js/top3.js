createImg = function() {
    // 获取Canvas元素和上下文
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    //取得top3文字
    var top1 = document.getElementById("top1").value.substr(0,9);
    var top2 = document.getElementById("top2").value.substr(0,9);
    var top3 = document.getElementById("top3").value.substr(0,9);

    //取得主題
    var theme = document.getElementById("theme");
    theme_value = theme.value

    // 创建一个Image对象来加载jpg底图
    const backgroundImage = new Image();
    backgroundImage.src = '../../img/tool-top3/'+String(theme.value)+'.jpg'; // 将文件名替换为您的底图文件名

    // 在图像加载完成后绘制它
    backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // 添加文字
        ctx.font = 'bold 72px 微軟正黑體';
        ctx.fillStyle = 'white';
        ctx.fillText(top1, 250, 940); // 修改文字内容和位置
        ctx.fillText(top2, 250, 1240); // 修改文字内容和位置
        ctx.fillText(top3, 250, 1540); // 修改文字内容和位置

        //展示圖片
        document.getElementById("canvasCont").style.display = "unset";

        // 可下載圖片
        const dwnButton = document.getElementById("dwnButton");
        dwnButton.disabled = false;

        //畫面滾到canvas
        canvas.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
};
  
