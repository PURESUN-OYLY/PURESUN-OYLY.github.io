function getElement(selector) {
    return document.querySelector(selector);
}

// var timeOutEvent = 0;

function longPress() {
    timeOutEvent = 0;
    // putLongEvent();
    console.log("long按事件触发");
}
window.onload = function () {
    var qrcode_id = Math.random()
    qrcode_id *= 10
    qrcode_id = parseInt(qrcode_id) + 1
    if (qrcode_id > 8)
        qrcode_id = 8
    getElement("#wc_qrcode_img").src = "../wechat/images/wechat_qrcode/sun_wcqr" + qrcode_id + ".png"
    // alert(window.location.href)
}