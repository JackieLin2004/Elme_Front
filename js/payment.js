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
}