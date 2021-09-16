function goLotPage(lotType, lotNum) {
    var pagePath = './article/draw/';
    pagePath = pagePath.concat(lotType);
    pagePath = pagePath.concat('Lot');
    pagePath = pagePath.concat(lotNum);
    pagePath = pagePath.concat('.html');
    //alert('path = ' + pagePath);
    location.href = pagePath;
    return;
}

function drawDoujin() {
    //var newLot = Math.floor((Math.random() * 10000) % 8) + 1;
    var newLot = Math.random() * 10000;
    if (newLot < 300) {
        goLotPage('doujin', 9);
    }
    else {
        newLot = Math.floor(newLot % 8) + 1;
        goLotPage('doujin', newLot);
    }
    return;    
}

function goBack() {
    history.go(-1);
}