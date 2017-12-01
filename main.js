$(document).ready(function(){

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://bittrex.com/api/v1.1/public/getmarkets');
    xhr.setRequestHeader("Accept", "application/vnd.github.3.raw");
    xhr.send();
    
    xhr.onload = function(e){
       var data = JSON.parse(xhr.response);
       console.log(data);

       var contador = data.result.length
       data = data.result;
       for (var i = 0; i < contador; i++){
           var item = data[i];
           // console.log(item);
           
         $('.container').append('<div class="col-md-2"><h3>'+item.MarketCurrencyLong+'</h3><img src="'+item.LogoUrl+'" alt=""><p>Minimo trade: <span>'+item.MinTradeSize+'</span></p></div>')
        
     }
       
    }

});

//https://bittrex.com/api/v1.1/public/getmarkets
//http://cors.io/?u=https://bittrex.com/api/v1.1/public/getmarkets

//http://cors.io/?u=https://blockchain.info/stats?format=json