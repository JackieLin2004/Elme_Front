window.onload = function () {
    // 获取显示隐藏按钮DOM数组
    let ShowButtonArray = document.getElementsByClassName('octicon:triangle-down-24');
    // 获取订单明细的DOM数组
    let DetailBoxArray = document.getElementsByClassName('order-detail');

    // 初始化，一开始全部隐藏
    for (let i = 0; i < DetailBoxArray.length; i++) {
        DetailBoxArray[i].style.display = 'none';
    }

    for (let i = 0; i < ShowButtonArray.length; i++) {
        ShowButtonArray[i].onclick = function () {
            if (DetailBoxArray[i].style.display === 'none') {
                DetailBoxArray[i].style.display = 'block';
            } else {
                DetailBoxArray[i].style.display = 'none';
            }
        }
    }
}