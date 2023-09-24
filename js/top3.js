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

        // 可下載圖片
        const dwnButton = document.getElementById("dwnButton");
        dwnButton.disabled = false;
    };
};

dwnImg = function() {
    var canvas = document.getElementById('myCanvas');
    var dataURL = canvas.toDataURL('image/jpeg');
    var a = document.createElement('a');
    a.href = dataURL;
    a.download = 'canvas_image.jpg';
    a.click();
};
  
