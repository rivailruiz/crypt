$(document).ready(function(){
    $.support.cors = true;
    $.ajax({
        url: "http://cors.io/?u=https://bittrex.com/api/v1.1/public/getmarkets",
        type: 'GET',
        dataType: 'json',
        method: 'jsonp',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Origin': 'https://rivailruiz.github.io'
        },
        // beforeSend: function (xhr) {
        //     xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
        // },
        success: function (data){
          console.log(data);
        },
        error: function(error){
            console.log(error);
        }
    })
});

//https://bittrex.com/api/v1.1/public/getmarkets
//http://cors.io/?u=https://bittrex.com/api/v1.1/public/getmarkets

//http://cors.io/?u=https://blockchain.info/stats?format=json