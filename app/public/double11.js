(function () {
  const dirUrl = '';
  let money = '';
  let timeTimer = null;
  let dataTimer = null;
  getData();
  function getData() {
    $.ajax({
      type: 'GET',
      url: `${dirUrl}/pc/festival`,
      dataType: 'json',
      success: (response) => {
        if (response.code === 200) {
          var res = response.result;
          if(res.endCount){
            timeFormat(res.endCount);
          } else {
            $('#time').html("距活动开始：");
            timeFormat(res.startCount);
          }
          money = moneyFormat(res.elevenOrdersMoney);
          $('.orders').text(res.elevenOrders || 0);
          $('.money').text(`￥${money}`);
        }
      },
      complete: () => {
        if (dataTimer) clearTimeout(dataTimer);
        dataTimer = setTimeout(() => {
          getData();
        }, 5000)
      },
    });
  };

  function moneyFormat(money) {
    if (money) {
      const str = money + '';
      let arr = [];
      let count = str.length;
      while(count >= 3) {
        arr.unshift(str.slice(count - 3, count));
        count -= 3;
      }

      str.length % 3 && arr.unshift(0, str.length % 3);
      return arr.toString();
    } 
    return 0;
  }

  function timeFormat(s) {
    const days = parseInt(s / (60 * 60 * 24));
    const hours = parseInt((s % (60 * 60 * 24)) / (60 * 60));
    const minutes = parseInt((s % (60 * 60)) / 60);
    const seconds = s % 60;

    $('.time-d').text(addZero(days));
    $('.time-h').text(addZero(hours));
    $('.time-m').text(addZero(minutes));
    $('.time-s').text(addZero(seconds));
    if (timeTimer) clearTimeout(timeTimer);
    if (s > 0) {
      timeTimer = setTimeout(() => {
        timeFormat(--s);
      }, 1000);
    }
  }
  function addZero(num){
    return ('0' + num).slice(-2);
  }
})();