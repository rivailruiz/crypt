$(document).ready(function(){
    $.support.cors = true;
    $.ajax({
        url: "https://bittrex.com/api/v1.1/public/getmarkets",
        type: 'GET',
        dataType: 'json',
        method: 'jsonp',
        // beforeSend: function (xhr) {
        //     xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
        // },
        success: function (data){
          var contador = data.result.length
            data = data.result;
          for (var i = 0; i < contador; i++){
              var item = data[i];
                // console.log(item);
                
              $('.container').append('<div class="col-md-2"><h3>'+item.MarketCurrencyLong+'</h3><img src="'+item.LogoUrl+'" alt=""><p>Minimo trade: <span>'+item.MinTradeSize+'</span></p></div>')
             
          }
        },
        error: function(error){
            console.log(error);
        }
    })
});

//https://bittrex.com/api/v1.1/public/getmarkets
//http://cors.io/?u=https://bittrex.com/api/v1.1/public/getmarkets

//http://cors.io/?u=https://blockchain.info/stats?format=json