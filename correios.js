"use strict";
var page = require('webpage').create(),
    server = 'https://www2.correios.com.br/sistemas/rastreamento/resultado.cfm?',
    data = 'acao=track&objetos=ID_OBJETO&btnPesq=Buscar';
page.customHeaders = {
    "Referer" : "https://www2.correios.com.br/sistemas/rastreamento/",
    "User-Agent":"Mozilla/5.0 (X11; Linux x86_64; rv:56.0) Gecko/20100101 Firefox/56.0"
}

page.open(server, 'post', data, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});

// curl -Ls 'http://www2.correios.com.br/sistemas/rastreamento/resultado.cfm?' -H 'Accept-Language: en-US,en;q=0.5' -H 'Content-Type: application/json; charset=utf-8' -H 'Referer: http://www2.correios.com.br/sistemas/rastreamento/' --data 'acao=track&objetos=SEUIDDOOBJETO&btnPesq=Buscar'
