window.onload = function () {
    // 获取显示隐藏按钮的DOM对象
    let ShoeButton = document.getElementById('ShowButton');
    // 获取订单明细的DOM对象
    let DetailBox = document.getElementById('DetailsBox');

    // 设置默认订单明细隐藏
    DetailBox.style.display = 'none';

    ShoeButton.onclick = function () {
        // 获取订单明细的DOM对象是否隐藏，是则显示，否则隐藏
        if (DetailBox.style.display === 'none') {
            DetailBox.style.display = 'block';
        } else {
            DetailBox.style.display = 'none';
        }
    }


    // 处理支付方式的部分
    let ALiPay = document.getElementById('ALiPay');
    let ALiPayBox = document.getElementById('ALiPay-box');
    let WeChatPay = document.getElementById('WeChatPay');
    let WeChatPayBox = document.getElementById('WeChatPay-box');

    WeChatPayBox.style.display = 'none';

    ALiPay.onclick = function () {
        if (ALiPayBox.style.display === 'none') {
            ALiPayBox.style.display = 'block';
            WeChatPayBox.style.display = 'none';
        } else {
            ALiPayBox.style.display = 'none';
        }
    }

    WeChatPay.onclick = function () {
        if (WeChatPayBox.style.display === 'none') {
            WeChatPayBox.style.display = 'block';
            ALiPayBox.style.display = 'none';
        } else {
            WeChatPayBox.style.display = 'none';
        }
    }
}

function RedirectToOrderList() {
    location.href = 'orderList.html';
    window.alert("支付成功！");
}